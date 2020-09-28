import { shopify } from "../shopify.mjs";
import { translatableQuery } from "./translatable.query.mjs";
import { getMetaField } from "../metafield/metafield.mjs";
import { config } from "../../config.mjs";

const translatableFilter = (e) => config.fields.indexOf(e.key) > -1;

const contents = (node) => node.translatableContent.filter(translatableFilter);

const filterMetaFields = (translatables, metafieldIds) => {
    return translatables.filter(
        (o) => metafieldIds.indexOf(o.node.resourceId) > -1
    );
};

export const translatableField = async (first, cursor) => {
    const { translatableResources } = await shopify.graphql(
        translatableQuery(),
        {
            first: 1,
            resourceType: "PRODUCT",
        }
    );
    const node = translatableResources.edges[0].node;
    return {
        id: node.resourceId,
        contents: contents(node),
    };
};

export const translatableMetaField = async () => {
    const { translatableResources } = await shopify.graphql(
        translatableQuery(),
        {
            first: 30,
            resourceType: "METAFIELD",
        }
    );
    const translatables = translatableResources.edges;
    const metafieldIds = await getMetaField(1);
    return filterMetaFields(translatables, metafieldIds);
};
