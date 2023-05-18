import logo from "../../assets/P3M_logo.svg";
import { Menu } from "antd";
import {
	HomeOutlined,
	CalendarOutlined,
	LogoutOutlined,
	UserOutlined,
	QrcodeOutlined
} from "@ant-design/icons";
import {
	MdAddTask,
	MdOutlineGroups,
	MdOutlineCollectionsBookmark,
} from "react-icons/md";
import "./sidebar.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import design from "../../assets/sidebar_design.png";
import { ReactNode } from "react";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../redux/auth/auth";
import { minimalToast } from "../../utils/toast";

type SidebarProps = {
	children: ReactNode;
  };
const CustomLogo = () => {
	return (
		<img src={logo} alt="Logo" style={{ width: "8.688rem", margin: "3rem" }} />
	);
};

const Sidebar = (props: SidebarProps): JSX.Element => {
	const { children } = props;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
let admin =false;
	return (
		<div>
			<div className="container ">
				<div className="side_bar">
					<img
						src={design}
						alt="design"
						style={{ position: "absolute", height: "100vh", width: "4.7rem" }}
					/>
					<CustomLogo />
					{admin && <Menu
						className="menu"
						defaultSelectedKeys={[window.location.pathname]}
						onClick={({ key }) => {
							navigate(key);
						}}
						items={[
							{
								key: "/dashboard",
								icon: <QrcodeOutlined />,
								label: "Dashboard",
							}
							]}
							/>}

					{!admin && <Menu
						className="menu"
						defaultSelectedKeys={[window.location.pathname]}
						onClick={({ key }) => {
							navigate(key);
						}}
						items={[
							{
								key: "/",
								icon: <HomeOutlined />,
								label: "Home",
							},
							{
								key: "/calendar",
								icon: <CalendarOutlined />,
								label: "Calender",
								className: "calendar",
							},
							{
								key: "/task-and-goals",
								icon: (
									<span style={{ fontSize: "20px", margin: "1rem 0.5rem" }}>
										<MdAddTask />
									</span>
								),
								label: "Task & Goals",
							},
							{
								key: "/awaaz",
								icon: (
									<span style={{ fontSize: "20px", margin: "1rem 0.5rem" }}>
										{" "}
										<MdOutlineGroups />
									</span>
								),
								label: "Awaaz",
							},
							{
								key: "/resource-hub",
								icon: (
									<span style={{ fontSize: "20px", margin: "1rem 0.5rem" }}>
										<MdOutlineCollectionsBookmark />
									</span>
								),
								label: "Resource Hub",
							},
						]}
					/>}
					<Menu
						className="menu"
						onClick={({ key }) => {
							if (key == "/logout") {
								dispatch(logout());
								navigate("/login");
								minimalToast(
									"User has been logged out Successfully!!",
									"success"
								);
							} else {
								navigate(key);
							}
						}}
						defaultSelectedKeys={[window.location.pathname]}
						items={[
							{
								key: "/profile",
								icon: <UserOutlined />,
								label: "Profile",
							},
							{
								key: "/logout",
								icon: <LogoutOutlined />,
								label: "Logout",
								danger: true,
							},
						]}
					/>
				</div>
				<div style={{ width: "100%" }}>
					<Navbar />
					{children}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
