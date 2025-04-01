import './style.css'
import products from "../api/products.json"
import { showProductContainer } from '../homeProductCards.js'






document.addEventListener("DOMContentLoaded", () => {
    showProductContainer(products);
  });










