/** importing dependencies **/
import { authReducer } from "./auth/auth";
import { postReducer } from "./post/post";
import { reactReducer } from "./react/react";

export const rootReducer = {
	auth: authReducer,
	post: postReducer,
	react: reactReducer,
};
