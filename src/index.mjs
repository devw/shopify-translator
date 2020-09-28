import {
    translatableMetaField,
    translatableField,
} from "./translatables/translatable.mjs";

import {
    translateField,
    translateMetaField,
} from "./translation/translation.mjs";

const translateFields = async () => {
    const translatable = await translatableField(2);
    translateField(translatable);
};

const translateMetaFields = async () => {
    const translatables = await translatableMetaField(40);
    console.log("translatables", translatables);
    translateMetaField(translatables);
};

const main = async () => {
    translateFields();
    translateMetaFields();
};

main();
