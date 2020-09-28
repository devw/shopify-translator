export const productsQuery = (first, after) => {
    const query = `
      query FetchMetafields {
        products(first: ${first}, sortKey:UPDATED_AT, reverse: true ${
        after ? `, after:"${after}"` : ""
    }) {
          edges {
            node {
              id
              title
              metafields(first: 30, namespace: "back") {
                edges {
                  node {
                    id
                    value
                    key
                    namespace
                    legacyResourceId
                  }
                }
              }
            }
          }
        }
      }
    `;
    console.log(query);

    return query;
};
