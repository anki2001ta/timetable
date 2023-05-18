import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { login } from "../../redux/auth/auth";
import { Form, Input, Button, Spin } from "antd";
import { useState } from "react";
import "./Login.scss";
import { minimalToast } from "../../utils/toast";
import Logo from "../../assets/logo.svg";

const Login = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values: any) => {
		setLoading(true);
		try {
			dispatch(login(values));
			setLoading(false);
			navigate("/");
		} catch (error: any) {
			setLoading(false);
			dispatch(minimalToast(error.message, "error"));
		}
		console.log("Submitted!", values);
	};

	return (
		<Spin spinning={loading} size="large">
			<div className="signin">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="card">
					<h2 className="card-title">Login</h2>
					<Form onFinish={handleSubmit}>
						<Form.Item label="Email" name="email">
							<Input type="email" required />
						</Form.Item>
						<Form.Item label="Password" name="password">
							<Input type="password" required />
						</Form.Item>
						<Form.Item>
							<p>
								Account does not exist?{" "}
								<Link to="/register">Create account</Link>
							</p>
							<Button type="primary" htmlType="submit" loading={loading}>
								Login
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</Spin>
	);
};

export default Login;
