import { productsFetch } from "./products/products.fetch.mjs";
import { translatable as translatableGet } from "./translatables/translatable.mjs";
import { translationCreate } from "./translation/translation.create.mjs";

const main = async () => {
    const translatable = await translatableGet(1);
    const translation = await translationCreate(translatable);
    console.log(translation);
};

main();
