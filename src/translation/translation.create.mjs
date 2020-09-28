import { translationMutation } from "./translation.mutation.mjs";
import { shopify, graphql } from "../shopify.mjs";

const fix_key = (key) => key.replace(/\bdigest/, "translatableContentDigest");
const objectAdapted = (e) => {
    e.locale = "es";
    e.value = e.value.toUpperCase();
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

    // const translation = await graphql(mutation, variables);
    // return translation;

    shopify
        .graphql(mutation, variables)
        .then((res) => console.log("OK"))
        .catch((err) => console.error("error", err));
};
