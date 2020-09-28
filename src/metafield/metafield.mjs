import { shopify } from "../shopify.mjs";
import { MetafieldQuery } from "./metafield.query.mjs";
import { config } from "../../config.mjs";

const filterMetaField = (metafields) =>
    metafields.filter((e) => config.metafields.indexOf(e.node.key) > -1);

export const getMetaField = async (first, cursor) => {
    const query = MetafieldQuery(first, cursor);
    const result = await shopify.graphql(query);
    const metafields = result.products.edges[0].node.metafields.edges;
    const filteredMetaField = filterMetaField(metafields);

    return filteredMetaField.map((e) => e.node.id);
};
