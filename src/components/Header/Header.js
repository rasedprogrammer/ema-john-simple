import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	return (
		<nav className="header">
			<img src={logo} alt="" />
			<div>
				<Link to="/">Shop</Link>
				<Link to="/orders">Order</Link>
				<Link to="/inventory">Inventory</Link>
				<Link to="/about">About</Link>
				{user?.uid ? (
					<button onClick={logOut} className="btn-signOut">
						Sign Out
					</button>
				) : (
					<>
						<Link to="/login">Login</Link>
						<Link to="/signup">SignUp</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Header;

/* <Link>
	<small>{user?.email}</small>
</Link> */
