/** importing libraries **/
import { toast, TypeOptions } from "react-toastify";

export const minimalToast = (
	message: string,
	type: TypeOptions = "default"
): any => {
	let gradient: string;
	switch (type) {
		case "success":
			gradient =
				"linear-gradient(180deg, #007E33 0%, #007E33 50%, #00C851 100%)";
			break;
		case "error":
			gradient =
				"linear-gradient(180deg, #B00020 0%, #B00020 50%, #FF5252 100%)";
			break;
		case "warning":
			gradient =
				"linear-gradient(180deg, #FFA900 0%, #FFA900 50%, #FFD600 100%)";
			break;
		case "info":
			gradient =
				"linear-gradient(180deg, #0091EA 0%, #0091EA 50%, #40C4FF 100%)";
			break;
		default:
			gradient = "linear-gradient(180deg, #1560BD 0%, #0D47A1 100%)";
			break;
	}

	toast(message, {
		style: {
			background: gradient,
		},
		hideProgressBar: true,
		autoClose: 2000,
		type,
	});
};
