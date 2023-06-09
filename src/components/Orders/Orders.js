import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
	const { initialCart } = useLoaderData();
	const [cart, setCart] = useState(initialCart);
	const handleRemoveItem = (id) => {
		const remening = cart.filter((product) => product.id !== id);
		setCart(remening);
		removeFromDb(id);
	};
	const clearCart = () => {
		setCart([]);
		deleteShoppingCart();
	};
	return (
		<div className="shop-container">
			<div className="orders-container">
				{cart.map((product) => (
					<ReviewItem
						key={product.id}
						product={product}
						handleRemoveItem={handleRemoveItem}
					></ReviewItem>
				))}
				{cart.length === 0 && (
					<h1>
						No Items For Review. Please <Link to="/">Shop More...</Link>
					</h1>
				)}
			</div>
			<div className="cart-container">
				<Cart clearCart={clearCart} cart={cart}>
					<Link to="/shipping">
						<button>Proceed Shipping</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Orders;
