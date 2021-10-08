import { gql } from "@apollo/client";


export const ALL_PRODUCTS_QUERY = gql`
query Products {
  products {
    items {
      id
      name
      description
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

export const PRODUCT__REFETCH_QUERY = gql`
query Product($id: ID!){
  product(id: $id){
    variants{
      languageCode
      currencyCode
      price
    }
  }
}
`;