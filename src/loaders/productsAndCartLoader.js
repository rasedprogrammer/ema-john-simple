import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
	//Get Products
	const productsData = await fetch("products.json");
	const products = await productsData.json();

	// Get Cart
	const saveCart = getStoredCart();
	const initialCart = [];
	for (const id in saveCart) {
		const addedProduct = products.find((product) => product.id === id);
		if (addedProduct) {
			const quantity = saveCart[id];
			addedProduct.quantity = quantity;
			initialCart.push(addedProduct);
		}
	}
	return { products: products, initialCart: initialCart };
};
