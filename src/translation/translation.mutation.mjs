export const translationMutation = () => {
    const query = `
    mutation CreateTranslation($id: ID!, $translations: [TranslationInput!]!) {
      translationsRegister(resourceId: $id, translations: $translations) {
        translations {
          key
          locale
          outdated
          value
        }
      }
    }
`;

    return query;
};
