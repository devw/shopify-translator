export const translatableQuery = () =>
    `query FetchFieldsOrMetaField($first: Int, $resourceType: TranslatableResourceType!) {
        translatableResources(first: $first, resourceType: $resourceType) {
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
