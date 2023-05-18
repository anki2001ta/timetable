import { Button, Input, Drawer, Menu  } from "antd";
import "./Navbar.scss";
import design from "../../assets/sidebar_design.png";
import { SearchOutlined, BellOutlined, BarsOutlined,QrcodeOutlined } from "@ant-design/icons";
import {
	MdAddTask,
	MdOutlineGroups,
	MdOutlineCollectionsBookmark,
} from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import logo from "../../assets/mobile_logo.svg";
import { useState } from "react";
import {
	HomeOutlined,
	CalendarOutlined,
	LogoutOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { logout } from "../../redux/auth/auth";
import { minimalToast } from "../../utils/toast";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

type Props = {};



const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(false);
  const [side, setSide] = useState(false);
  const navigate = useNavigate();
	const dispatch = useAppDispatch();

  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawermsg = () => {
    setMsg(true);
  };
  const showDrawermob = () => {
    setSide(true);
  };
  const onClosemsg = () => {
    setMsg(false);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onClosemob = () => {
    setSide(false);
  };

  const onSearch = (value: string) => console.log(value);
  const CustomLogo = () => {
    return <img src={logo} alt="Logo" className="mobile_logo" />;
  };
  let admin =false;
  return (
    <div className="nav">
      <Input
        className="search"
        placeholder="Search"
        suffix={<SearchOutlined />}
      />
      
        <Button onClick={showDrawermob} className="menu_button">
        <BarsOutlined onClick={showDrawermob} />
        </Button>
        <Drawer
          title="Pen Paper & Pencil"
          placement="left"
          onClose={onClosemob}
          open={side}
        >
         
            <div className="mob_bar">
					<img
						src={design}
						alt="design"
						style={{ position: "absolute", height: "100vh",width:"20%"}}
					/>
					<CustomLogo />
{admin && <Menu
						className="menu"
						defaultSelectedKeys={[window.location.pathname]}
						onClick={({ key }) => {
							navigate(key);
              {onClosemob()}
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
              {onClosemob()}
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
              {onClosemob()}
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
        </Drawer>
     

      
      <div>
        <CustomLogo />
      </div>
      <div className="nav_noti">
        <div className="help_icon">
          <TfiHeadphoneAlt style={{ fontSize: "30px", color: "#ffff" }} />
        </div>
        <Button onClick={showDrawermsg} className="nav_icons">
          <BsChatLeftText className="chat_icon" />
        </Button>
        <Drawer
          title="My Message"
          placement="right"
          onClose={onClosemsg}
          open={msg}
        >
          <div>
            <div className="noti_msg">
              <img
                src={
                  "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                }
              />
              <div>
                <p>Olimtoy</p>
                <p>Hey! Do you wanna see new robtics?</p>
              </div>
            </div>
          </div>
        </Drawer>

        <Button onClick={showDrawer} className="bell_icons">
          <BellOutlined className="chat_icon" />
        </Button>
        <Drawer
          title="My Notification"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div>
            <div className="noti_noti">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU"
                }
              />
              <div>
                <p>Olimtoy</p>
                <p>time</p>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
