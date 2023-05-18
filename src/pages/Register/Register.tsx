import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { register } from "../../redux/auth/auth";
import { Form, Input, Button, Select, DatePicker, Spin } from "antd";
import "./Register.scss";
import { minimalToast } from "../../utils/toast";
import Logo from "../../assets/logo.svg";

const { Option } = Select;

const Register = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values: any) => {
		setLoading(true);
		try {
			await dispatch(register(values));
			setLoading(false);
			navigate("/login");
		} catch (error: any) {
			setLoading(false);
			dispatch(minimalToast(error.message, "error"));
		}
		console.log("Submitted!", values);
	};

	return (
		<Spin spinning={loading} size="large">
			<div className="signup">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="card">
					<h2 className="card-title">Register</h2>
					<Form onFinish={handleSubmit}>
						<Form.Item name="name" label="Name">
							<Input placeholder="Enter your name" />
						</Form.Item>
						<Form.Item name="email" label="Email">
							<Input placeholder="Enter your email" />
						</Form.Item>
						<Form.Item name="role" label="Role">
							<Select placeholder="Select your role">
								<Option value="Teacher">Teacher</Option>
								<Option value="Admin">Admin</Option>
							</Select>
						</Form.Item>
						<Form.Item name="dob" label="Date of Birth">
							<DatePicker
								placeholder="Select your date of birth"
								format="YYYY-MM-DD"
								cellRender={(current) => {
									const style: React.CSSProperties = {};
									if (current.date() === 1) {
										style.border = "1px solid #1890ff";
										style.borderRadius = "50%";
									}
									return (
										<div className="ant-picker-cell-inner" style={style}>
											{current.date()}
										</div>
									);
								}}
							/>
						</Form.Item>
						<Form.Item name="subject" label="Subject">
							<Input placeholder="Enter your subject" />
						</Form.Item>
						<Form.Item>
							<p>
								Already have an account? <Link to="/login">Login</Link>
							</p>
							<Button type="primary" htmlType="submit" loading={loading}>
								Register
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</Spin>
	);
};

export default Register;
