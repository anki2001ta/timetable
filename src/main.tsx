/** importing libraries  **/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

/** importing dependencies  **/
import { store } from "./redux/store";
import App from "./App";
import "./styles/index.scss";
import "antd/dist/reset.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
		<ToastContainer />
	</React.StrictMode>
);
