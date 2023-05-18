import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPost } from "../../interfaces/interfaces";
import { api } from "../../services/Apis";

interface PostState {
	posts: IPost[];
	userPosts: IPost[];
}

const initialState: PostState = {
	posts: [],
	userPosts: [],
};

const fetchAllPosts = createAsyncThunk(
	"posts/fetchAll",
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const header = {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			};
			const data = await api.post.getAll(header);
			dispatch(setPosts(data));
			dispatch(setPosts(data));
			return data;
		} catch (error: any) {
			return rejectWithValue(error.data.data);
		}
	}
);

const fetchUserPosts = createAsyncThunk(
	"posts/fetchUser",
	async (userId: string, { rejectWithValue, dispatch }) => {
		try {
			const header = {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			};
			const data = await api.post.getUserPosts(header, userId);
			dispatch(setUserPosts(data));
			return data;
		} catch (error: any) {
			return rejectWithValue(error.data.data);
		}
	}
);

const createPost = createAsyncThunk(
	"posts/create",
	async (post: any, { rejectWithValue, getState, dispatch }) => {
		try {
			const { access_token } = (getState() as RootState).auth;

			const header = {
				Authorization: `Bearer ${access_token}`,
			};
			const data = await api.post.create(post, header);
			dispatch(setPosts([data?.data]));
			dispatch(setUserPosts([data?.data]));
			return data;
		} catch (error: any) {
			return rejectWithValue(error.data.data);
		}
	}
);

const deletePost = createAsyncThunk(
	"posts/delete",
	async (postId: string, { rejectWithValue, getState, dispatch }) => {
		try {
			const { access_token } = (getState() as RootState).auth;

			const header = {
				Authorization: `Bearer ${access_token}`,
			};

			const data = await api.post.delete(postId, header);
			dispatch(removePost(postId));
			return data;
		} catch (error: any) {
			return rejectWithValue(error.data.data);
		}
	}
);

const pinPost = createAsyncThunk(
	"posts/pin",
	async (postId: string, { rejectWithValue, getState, dispatch }) => {
		try {
			const { access_token } = (getState() as RootState).auth;

			const header = {
				Authorization: `Bearer ${access_token}`,
			};

			const data = await api.post.pin(postId, header);
			dispatch(pinPostAction(postId));
			return data;
		} catch (error: any) {
			return rejectWithValue(error.data.data);
		}
	}
);

const commentOnPost = createAsyncThunk(
	"posts/comment",
	async (
		{ postId, body }: { postId: string; body: any },
		{ rejectWithValue, getState, dispatch }
	) => {
		try {
			const { access_token } = (getState() as RootState).auth;

			const header = {
				Authorization: `Bearer ${access_token}`,
			};
			const data = await api.post.comment(postId, body, header);
			dispatch(commentOnPostAction({ postId, comment: data }));
			return data;
		} catch (error: any) {
			return rejectWithValue(error.data.data);
		}
	}
);

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts: (state, action: PayloadAction<IPost[]>) => {
			state.posts.push(...action.payload);
			state.posts = [...state.posts];
		},

		removePost: (state, action): any => {
			state.posts = state.posts.filter((post) => post._id !== action.payload);
		},
		pinPostAction: (state, action): any => {
			state.posts = state.posts.map((post) =>
				post._id === action.payload ? { ...post, pinned: true } : post
			);
		},
		commentOnPostAction: (state, action): any => {
			const { postId, comment } = action.payload;
			state.posts = state.posts.map((post) =>
				post._id === postId
					? { ...post, comments: [...post.comments, comment] }
					: post
			);
		},
		setUserPosts: (state, action): any => {
			state.userPosts = action.payload;
		},
	},
});

export function getPostState(state: RootState): PostState {
	return state.posts;
}
const {
	setUserPosts,
	setPosts,
	commentOnPostAction,
	removePost,
	pinPostAction,
} = postSlice.actions;

export {
	setUserPosts,
	setPosts,
	commentOnPostAction,
	removePost,
	pinPostAction,
	fetchAllPosts,
	fetchUserPosts,
	createPost,
	deletePost,
	pinPost,
	commentOnPost,
};
export const postReducer = postSlice.reducer;
