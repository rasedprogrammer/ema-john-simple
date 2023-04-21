import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

// const Product = ({product, handleAddToCart}) => {
const Product = (props) => {
	// console.log(props.product);
	const { product, handleAddToCart } = props;
	const { name, img, price, seller, ratings } = product;
	// const { name, img, price, seller, ratings } = props.product;
	return (
		<div className="product-container">
			<img src={img} alt="" />
			<div className="product-info">
				<h6>Name: {name}</h6>
				<p className="product-price">Price: ${price}</p>
				<p>
					<small>Manufacturer: {seller}</small>
				</p>
				<p>
					<small>Rating: {ratings}</small>
				</p>
			</div>
			<button
				onClick={() => handleAddToCart(product)}
				// onClick={() => props.handleAddToCart(props.product)}
				className="btn-cart"
			>
				<p className="btn-text">Add to Cart</p>
				<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Product;
