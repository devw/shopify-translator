import {
    translatableMetaField,
    translatableField,
} from "./translatables/translatable.mjs";

import {
    translateFields,
    translateMetaField,
} from "./translation/translation.create.mjs";

const translateFields = async () => {
    const translatable = await translatableField(2);
    const translations = await translateFields(translatable);
    console.log(translatable);
};

const translateMetaFields = async () => {
    const translatables = await translatableMetaField(40);
    translateMetaField(translatables);
};

const main = async () => {
    // translateFields();
    translateMetaFields();
};

main();
