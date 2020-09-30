export const translationMutation = () => `
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
