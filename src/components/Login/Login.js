import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Login.css";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				form.reset();
				navigate(from, { replace: true });
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="form-container">
			<h2 className="form-title">Login</h2>
			<form onSubmit={handleSubmit} action="/" className="form-div">
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required />
				</div>
				<input className="btn-submit" type="submit" value="Login" />
			</form>
			<p className="signup-link">
				New to ema john, <Link to="/signup">Create a New Account </Link>{" "}
			</p>
		</div>
	);
};

export default Login;
