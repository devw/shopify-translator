export const translatableQuery = (first, after) =>
    `query FetchProducts {
        translatableResources(first: ${first}, after:${
        after ? $after : null
    }, resourceType: PRODUCT) {
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
