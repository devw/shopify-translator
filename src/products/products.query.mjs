export const productsQuery = (queryStatement, first, after) => {
    const query = `
      query FetchProducts {
        products(query: "${queryStatement}", first: ${first}, sortKey:UPDATED_AT, reverse: true ${
        after ? `, after:"${after}"` : ""
    }) {
          edges {
            node {
              id
              title
            }
          }
        }
        translatableResources(first: 1, resourceType: PRODUCT) {
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
    console.log(query);

    return query;
};
