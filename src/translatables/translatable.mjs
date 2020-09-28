import { translatableQuery } from "./translatable.query.mjs";
import { shopify } from "../shopify.mjs";

const translatableFilter = (e) => ["title", "body_html"].indexOf(e.key) > -1;

const contents = (node) => node.translatableContent.filter(translatableFilter);

export const translatableField = async (first, cursor) => {
    const query = translatableQuery(first, cursor, "PRODUCT");
    console.log(query);
    const { translatableResources } = await shopify.graphql(query);
    const node = translatableResources.edges[0].node;
    return {
        id: node.resourceId,
        contents: contents(node),
    };
};

export const translatableMetaField = async (first, cursor) => {
    const query = translatableQuery(first, cursor, "METAFIELD");
    console.log(query);
    const { translatableResources } = await shopify.graphql(query);
    return translatableResources.edges;
};
