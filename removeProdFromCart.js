import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS(); // Get products from localStorage

  // Remove the product from the cartProducts array
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // Update localStorage with the new cart data
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  // Remove the product card from the DOM
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove(); // Remove product card from the cart page
    showToast("deleted", id); // Show toast notification
  }

  // Update the cart value on the page after removal
  updateCartValue(cartProducts); 
};
