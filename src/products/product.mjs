import { shopify } from "../shopify.mjs";
import { productsQuery } from "./product.query.mjs";

const metafieldsFilter = (metafields) =>
    metafields.filter((e) => ["first", "second"].indexOf(e.node.key) > -1);

export const productsFetch = async (first, cursor) => {
    console.log(first);
    const query = productsQuery(first, cursor);
    const result = await shopify.graphql(query);
    const metafields = result.products.edges[0].node.metafields.edges;
    return metafieldsFilter(metafields);

    // const {
    //     err: fetchErr,
    //     products,
    //     translatableResources,
    // } = await shopify.graphql(query);
    // if (fetchErr) {
    //     log.error(
    //         "ERROR - something went wrong when fetching products",
    //         { query },
    //         fetchErr
    //     );
    // }
    // return [products.edges[0], translatableResources.edges[0]];
};
