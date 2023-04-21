import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Shipping from "./components/Shipping/Shipping";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import About from "./components/About/About";
import PrivateRoute from "../src/routes/PrivateRoute";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			children: [
				{
					path: "/",
					loader: () => fetch("products.json"),
					element: <Shop></Shop>,
				},
				{
					path: "/orders",
					loader: productsAndCartLoader,
					element: <Orders></Orders>,
				},
				{
					path: "/about",
					loader: productsAndCartLoader,
					element: <About></About>,
				},
				{
					path: "/login",
					element: <Login></Login>,
				},
				{
					path: "/signup",
					element: <SignUp></SignUp>,
				},
				{
					path: "/shipping",
					element: (
						<PrivateRoute>
							<Shipping></Shipping>
						</PrivateRoute>
					),
				},
				{
					path: "/inventory",
					element: (
						<PrivateRoute>
							<Inventory></Inventory>
						</PrivateRoute>
					),
				},
			],
		},
	]);
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
