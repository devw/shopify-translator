import dotenv from "dotenv";
dotenv.config();
const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY, SHOP_NAME } = process.env;

import Shopify from "shopify-api-node";
import fetch from "node-fetch";

export const shopify = new Shopify({
    shopName: SHOP_NAME,
    apiKey: SHOPIFY_API_KEY,
    password: SHOPIFY_API_SECRET,
});

export const graphql = (query, variables) =>
    fetch(`${SHOP_NAME}/admin/api/2020-07/graphql.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": SHOPIFY_API_SECRET,
        },
        body: JSON.stringify({ query: query, variables: variables }),
    });
