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

export const translationCreate = async ({ id, contents }) => {
    const mutation = translationMutation();
    const variables = {
        id: id,
        translations: contents.map((e) => objectAdapted(e)),
    };
    console.log(mutation, variables);

    shopify
        .graphql(mutation, variables)
        .then((_) => console.log("translationCreate OK"))
        .catch((err) => console.error("error", err));
};

export const translateMetaField = async (variables) => {
    const mutation = translationMutation();
    variables.forEach((variable) =>
        shopify
            .graphql(mutation, variable)
            .then((_) => console.log("translationCreate OK"))
            .catch((err) => console.error("error", err))
    );
};
