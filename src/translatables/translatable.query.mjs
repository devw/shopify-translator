export const translatableQuery = (first, cursor, product_or_metafield) =>
    `query FetchFieldsOrMetaField {
        translatableResources(first: ${first}, after:${
        cursor ? $cursor : null
    }, resourceType: ${product_or_metafield}) {
          edges {
            node {
              resourceId
              translatableContent {
                key
                value
                digest
                locale
              }
            }
          }
        }
      }
`;
