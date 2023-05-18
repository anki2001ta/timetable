/** importing dependencies **/
import { AxiosRequest } from "./ApiCall";

const baseUrl = import.meta.env.VITE_SERVER_URL as string;
console.log(import.meta.env.VITE_SERVER_URL);

export const api = {
	user: {
		register: async (body: any) => {
			try {
				const data = await AxiosRequest(
					"POST",
					`${baseUrl}/teacher/register`,
					body
				);
				console.log("axios register", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
		login: async (body: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"POST",
					`${baseUrl}/teacher/login`,
					body,
					header
				);
				console.log("axios login", data.data);
				return data.data;
			} catch (error: any) {
				console.log("axios error", error);
			}
		},
	},
	post: {
		create: async (body: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"POST",
					`${baseUrl}/post/create-post`,
					body,
					header
				);
				console.log("axios post", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
		getAll: async (header: any) => {
			try {
				const data = await AxiosRequest(
					"GET",
					`${baseUrl}/post/get-all-posts`,
					header
				);
				console.log("axios post", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
		getUserPosts: async (id: any, header: any) => {
			try {
				const data = await AxiosRequest("GET", `${baseUrl}/post/${id}`, header);
				console.log("axios post", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
		delete: async (id: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"DELETE",
					`${baseUrl}/post/${id}`,
					header
				);
				console.log("axios post", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
		pin: async (id: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"POST",
					`${baseUrl}/post/pin-post/${id}`,
					header
				);
				console.log("axios post", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
		comment: async (id: any, body: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"POST",
					`${baseUrl}/post/pin-post/${id}`,
					body,
					header
				);
				console.log("axios post", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
	},
	reaction: {
		react: async (postId: any, react: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"POST",
					`${baseUrl}/react/react-post/`,
					{ postId, react },
					header
				);
				console.log("axios react", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
		getReact: async (id: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"GET",
					`${baseUrl}/react/get-all-reaction/${id}`,
					header
				);
				console.log("axios react", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
	},
	media: {
		upload: async (path: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"POST",
					`${baseUrl}/upload/upload-images`,
					path,
					header
				);
				console.log("axios react", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
		getAll: async (path: any, sort: any, max: any, header: any) => {
			try {
				const data = await AxiosRequest(
					"GET",
					`${baseUrl}/upload/list-images`,
					{ path, sort, max },
					header
				);
				console.log("axios react", data.data);
				return data.data;
			} catch (error) {
				console.log("axios error", error);
			}
		},
	},
};
