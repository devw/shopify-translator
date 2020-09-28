import { shopify } from "../shopify.mjs";
import { MetafieldQuery } from "./metafield.query.mjs";

const filterMetaField = (metafields) =>
    metafields.filter((e) => ["first", "second"].indexOf(e.node.key) > -1);

export const getMetaField = async (first, cursor) => {
    console.log(first);
    const query = MetafieldQuery(first, cursor);
    const result = await shopify.graphql(query);
    const metafields = result.products.edges[0].node.metafields.edges;
    const filteredMetaField = filterMetaField(metafields);

    return filteredMetaField.map((e) => e.node.id);
};
