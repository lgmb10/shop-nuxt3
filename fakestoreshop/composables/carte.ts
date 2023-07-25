import {useState} from "nuxt/app";

export const useCart = () => useState<Array<Object>>('cartStore', () => [])

export function addToCart(product: Object) {
    if (!process.client) return;
    const cartStore = useCart();
    // @ts-ignore
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart === null) {
        cart = [product];
    } else {
        // @ts-ignore
        const index = cart.findIndex(o => o.id === product.id);
        index !== -1 ? cart[index].quantity++ : cart.push(product);
    }
    cartStore.value = cart;
    console.log(cartStore.value);
    localStorage.setItem("cart", JSON.stringify(cart));

}