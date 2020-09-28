import { config } from "../../config.mjs";

export const MetafieldQuery = (first, after) => `
      query FetchMetafields {
        products(first: ${first}, sortKey:UPDATED_AT, reverse: true ${
    after ? `, after:"${after}"` : ""
}) {
          edges {
            node {
              id
              title
              metafields(first: 30, namespace: "${
                  config.metafield_namespace
              }") {
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
