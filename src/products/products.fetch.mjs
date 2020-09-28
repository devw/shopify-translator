import { shopify } from "../shopify.mjs";
import { productsQuery } from "./products.query.mjs";

export const productsFetch = async (updateTimestamp, first, cursor) => {
    const query = productsQuery(
        `updated_at:>${updateTimestamp}`,
        first,
        cursor
    );

    const {
        err: fetchErr,
        products,
        translatableResources,
    } = await shopify.graphql(query);
    if (fetchErr) {
        log.error(
            "ERROR - something went wrong when fetching products",
            { query },
            fetchErr
        );
    }
    return [products.edges[0], translatableResources.edges[0]];
};
