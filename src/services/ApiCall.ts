/** importing libraries **/
import axios from "axios";
import { minimalToast } from "../utils/toast";

export const AxiosRequest = async (
	methods?: any,
	url?: any,
	body?: any,
	header?: any
) => {
	const config = {
		method: methods,
		url,
		headers: header
			? header
			: {
					"Content-Type": "application/json",
			  },
		data: body,
	};

	// Axios instance
	return axios(config)
		.then((data) => {
			minimalToast(data.data.message, "success");
			return data;
		})
		.catch((error) => {
			console.log(error);
			minimalToast(
				error && error.response && error?.response?.data?.data.error,
				"error"
			);
			return error;
		});
};
