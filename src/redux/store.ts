/** importing libraries **/
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

/** importing dependencies **/
import { rootReducer } from "./rootReducer";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
		getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
