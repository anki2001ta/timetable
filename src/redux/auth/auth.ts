/** importing dependencies **/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/** importing libraries **/
import { IAuthResponse, IAuthState } from "../../interfaces/interfaces";
import { api } from "../../services/Apis";
import AuthUtils from "../../utils/auth.utils";
import { RootState } from "../store";
import { minimalToast } from "../../utils/toast";

export type ISigninDetails = {
	email: string;
	password: string;
};

export type ISignupDetails = {
	email: string;
	name: string;
	password: string;
};

export const SERVER_URI = import.meta.env.VITE_SERVER_URL;

const initialState: IAuthState = {
	access_token: AuthUtils.getLocalStorage("access_token"),
	user: null,
	isAuthenticated: false,
	adminMode: false,
};

/**
 * @description - To register a new user
 */

const register = createAsyncThunk(
	"auth/register",
	async (details: ISignupDetails, { dispatch }) => {
		try {
			const data = await api.user.register(details);

			if (!data.data) {
				minimalToast("Something went wrong. Please try again later.", "error");
			}
			dispatch(registerSuccess(data));
			return data;
		} catch (err: any) {
			console.log(err);
		}
	}
);

/**
 * @description - To login user
 */
const login = createAsyncThunk(
	"auth/login",
	async (details: ISigninDetails, { dispatch }) => {
		try {
			const data = await api.user.login(details, {
				"Access-Control-Allow-Origin": import.meta.env.VITE_CLIENT_URL,
				"Content-Type": "application/json",
			});

			if (!data.data || !data.data?.token) {
				minimalToast("Something went wrong. Please try again later.", "error");
			}
			dispatch(success(data));
			return data;
		} catch (err: any) {
			console.log("error", err);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		/**
		 * Logout user
		 */
		logout: (state) => {
			AuthUtils.removeLocalStorage("access_token");
			AuthUtils.setAuthToken();

			Object.assign(state, initialState, { access_token: null });
		},

		/**
		 * Handle Auth Error
		 */
		error: (state) => {
			AuthUtils.removeLocalStorage("access_token");
			AuthUtils.setAuthToken();

			Object.assign(state, initialState, { access_token: null });
		},

		/**
		 * Handle Auth Request Success
		 */
		success: (state, { payload }: { payload: { data: IAuthResponse } }) => {
			AuthUtils.setLocalStorage("access_token", payload.data.token);
			AuthUtils.setAuthToken();

			state.access_token = payload.data.token;
			state.isAuthenticated = true;
			state.user = payload.data as any;
			state.adminMode = payload.data.role === "Admin" ? true : false;
		},
		/**
		 * Handle Auth Register Success
		 */
		registerSuccess: (state, { payload }: { payload: { data: any } }) => {
			state.access_token = null;
			state.user = payload.data;
			state.isAuthenticated = false;
		},

		/**
		 * Update profile success
		 */
		updateProfileSuccess(
			state,
			{
				payload,
			}: { payload: { name?: string; email?: string; password?: string } }
		) {
			if (state.user) {
				Object.assign(state.user, payload);
			}
		},

		updateAuthState: (state, { payload }: { payload: Partial<IAuthState> }) => {
			Object.assign(state, payload);
		},
	},
});

const {
	error,
	logout,
	success,
	registerSuccess,
	updateProfileSuccess,
	updateAuthState,
} = authSlice.actions;

export function getAuthState(state: RootState): IAuthState {
	return state.auth;
}

export {
	error,
	login,
	logout,
	register,
	success,
	updateAuthState,
	updateProfileSuccess,
};

export const authReducer = authSlice.reducer;
