import Shopify from "shopify-api-node";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY, SHOP_NAME } = process.env;

export const shopify = new Shopify({
    shopName: SHOP_NAME,
    apiKey: SHOPIFY_API_KEY,
    password: SHOPIFY_API_SECRET,
});
