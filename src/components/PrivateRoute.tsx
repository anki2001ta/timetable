import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";

interface Props {
	children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const isAuthenticated = localStorage.getItem("access_token")
		? JSON.parse(localStorage.getItem("access_token") ?? "")
		: "";

	const [showLoading, setShowLoading] = useState(true);

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout> | null = null;

		if (!isAuthenticated) {
			timer = setTimeout(() => {
				setShowLoading(false);
			}, 2500);
		} else {
			setShowLoading(false);
		}

		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [isAuthenticated]);

	// Render the element if authenticated, otherwise show loading or redirect to login
	return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
