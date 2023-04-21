import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./SignUp.css";

const SignUp = () => {
	const [error, setError] = useState(null);
	const { createUser } = useContext(AuthContext);
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirmPassword.value;
		// console.log(email, password, confirmPassword);
		if (password.length < 6) {
			setError("Your password must be at least 6 characters");
			return;
		}
		if (password !== confirmPassword) {
			setError("Your password did not match!!!");
			return;
		}
		createUser(email, password)
			.then((result) => {
				const user = result.user;
				form.reset();
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="form-container">
			<h2 className="form-title">Sign Up</h2>
			<form onSubmit={handleSubmit} action="/" className="form-div">
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Confirm Password</label>
					<input type="password" name="confirmPassword" required />
				</div>
				<input className="btn-submit" type="submit" value="Sign Up" />
			</form>
			<p className="signup-link">
				Already have an account, <Link to="/login">Login</Link>{" "}
			</p>
			<p className="text-error">{error}</p>
		</div>
	);
};

export default SignUp;
