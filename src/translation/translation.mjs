import { translationMutation } from "./translation.mutation.mjs";
import { shopify } from "../shopify.mjs";

const fix_key = (key) => key.replace(/\bdigest/, "translatableContentDigest");

const objectAdapted = (e) => {
    e.locale = "es";
    e.value = "es-translation: " + e.value.toUpperCase(); // translation
    return Object.assign(
        {},
        ...Object.keys(e).map((key) => ({ [fix_key(key)]: e[key] }))
    );
};

const adaptMetafields = (translatables) =>
    translatables.map((o) => ({
        id: o.node.resourceId,
        translations: [
            {
                key: "value",
                locale: "es",
                value: "es-sport_8",
                translatableContentDigest: o.node.translatableContent[0].digest,
            },
        ],
    }));

export const translateField = async ({ id, contents }) => {
    const variables = {
        id: id,
        translations: contents.map((e) => objectAdapted(e)),
    };

    shopify
        .graphql(translationMutation(), variables)
        .then((_) => console.log("translation field OK"))
        .catch((err) => console.error("error", err));
};

export const translateMetaField = async (variables) => {
    adaptMetafields(variables).forEach((variable) =>
        shopify
            .graphql(translationMutation(), variable)
            .then((_) => console.log("translation metafield OK"))
            .catch((err) => console.error("error", err))
    );
};
