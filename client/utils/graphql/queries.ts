import { gql } from "@apollo/client";


export const ALL_PRODUCTS_QUERY = gql`
query Products {
  products {
    items {
      id
      name
      description
      createdAt
      updatedAt
      variants{
          languageCode
          currencyCode
          price
          name
      }
      assets {
        source
      }
    }
  }
}
`;

export const ALL_PRODUCTS_REFETCH_QUERY = gql`
query Products {
  products {
    items {
      id
      createdAt
      updatedAt
      variants{
          languageCode
          currencyCode
          price
          name
      }
      assets {
        source
      }
    }
  }
}
`;

export const PRODUCT_QUERY = gql`
query Product($id: ID!){
  product(id: $id){
    id
    name
    description
    createdAt
    updatedAt
    variants{
      languageCode
      currencyCode
      price
      name
    }
    assets{
      source
    }
  }
}
`;

export const PRODUCT_REFETCH_QUERY = gql`
query Product($id: ID!){
  product(id: $id){
    createdAt
    updatedAt
    variants{
      languageCode
      currencyCode
      price
    }
  }
}
`;