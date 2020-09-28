import { productsFetch } from "./products/product.mjs";
import {
    translatableMetaField,
    translatableField,
} from "./translatables/translatable.mjs";

import {
    translationCreate,
    translateMetaField,
} from "./translation/translation.create.mjs";

const filterMetaFields = (e, metafieldIds) => {
    return e.filter((o) => metafieldIds.indexOf(o.node.resourceId) > -1);
};

const adaptMetafields = (metafields) =>
    metafields.map((o) => ({
        id: o.node.resourceId,
        translations: [
            {
                key: "value",
                locale: "es",
                value: "es-sport_5",
                translatableContentDigest: o.node.translatableContent[0].digest,
            },
        ],
    }));

const translateFields = async () => {
    const translatable = await translatableField(2);
    const translations = await translationCreate(translatable);
    console.log(translatable);
};

const translateMetaFields = async () => {
    const metafields = await productsFetch(1);
    const metafieldIds = metafields.map((e) => e.node.id);
    const translatables = await translatableMetaField(40);
    const translatablesFiltered = filterMetaFields(translatables, metafieldIds);

    const metafieldsAdapted = adaptMetafields(translatablesFiltered);

    translateMetaField(metafieldsAdapted);
};

const main = async () => {
    translateFields();
    translateMetaFields();
};

main();
