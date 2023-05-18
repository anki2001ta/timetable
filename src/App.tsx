import Awaaz from "./pages/Awaaz/Awaaz";
import Calendar from "./pages/Calendar/Calendar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ResourceHub from "./pages/ResourceHub/ResourceHub";
import TaskAndGoals from "./pages/TaskAndGoals/TaskAndGoals";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/PrivateRoute";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { logout } from "./redux/auth/auth";
import { RootState } from "./redux/store";

function Content(): JSX.Element {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
					//   <ProtectedRoute>
							<Home />
						//  </ProtectedRoute>
					}
				/>
				<Route
					path="/calendar"
					element={
						// <ProtectedRoute>
							<Calendar />
						//  </ProtectedRoute>
					}
				/>
				<Route
					path="/task-and-goals"
					element={
						//  <ProtectedRoute>
							<TaskAndGoals />
						//  </ProtectedRoute>
					}
				/>
				<Route
					path="/awaaz"
					element={
						//  <ProtectedRoute>
							<Awaaz />
						//  </ProtectedRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						//  <ProtectedRoute>
							<Profile />
						//  </ProtectedRoute>
					}
				/>
				<Route
					path="/resource-hub"
					element={
						 <ProtectedRoute>
							<ResourceHub />
						 </ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

function App() {
	const isAuthenticated = useAppSelector(
		(state: RootState) => state.auth.isAuthenticated
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// Check if the access token is present in localStorage
		const access_token = localStorage.getItem("access_token")
			? JSON.parse(localStorage.getItem("access_token") ?? "")
			: "";

		// If not, dispatch the logout action to clear the user's state and redirect to login
		if (!access_token) {
			dispatch(logout());
		}
	}, [dispatch, isAuthenticated]);

	return (
		<div>
			<Routes>
				<Route
					path="/login"
					 element={isAuthenticated ? <Navigate to="/" /> : <Login />}
				/>
				<Route path="/register" element={<Register />} />
				<Route
					path="/*"
					element={
						<Sidebar>
							<Content />
						</Sidebar>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
