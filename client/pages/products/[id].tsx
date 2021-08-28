import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router';


import { gql, useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import client from '../../lib/apollo-client';


const product: NextPage = (context) => {
  console.log('H EL P JDI JD', context)
  
    /*
    const { loading, error, data } = useQuery(PRODUCT_QUERY);

    if(loading){return <div>Loading...</div>}
    if(error){console.log(error.networkError.result.errors)}
    console.log('product SLUG', data)
    */

    return (
        <div>
            <h1 className="display-1">You are Viewing product {context.['__APOLLO_STATE__'].['Product:5'].id}</h1>
            <p>{context.['__APOLLO_STATE__'].['Product:5'].name}</p>
        </div>
  )
}


const ALL_PRODUCTS_QUERY = gql`
  {
    products {
      items {
        name
        description
        id
        variants{
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

const PRODUCT_QUERY = gql`
  query product($id: ID!){
    product(id: $id){
      id
      name
      description
      variants{
        price
        name
      }
      assets{
        source
      }
    }
  }
`;


//export async function getStaticPaths(context: GetStaticPathsContext) {
export const getStaticPaths: GetStaticPaths = async (context) => {
    const apolloClient = initializeApollo();
  
  const { data } = await apolloClient.query({
    query: ALL_PRODUCTS_QUERY,
  });

    const paths = data.products.items.map((product) => ({
        params: {id: product.id},
    }))
    console.log(paths);

    return { paths, fallback: false }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    //export const getStaticProps: GetStaticProps = async (context) => {
        const apolloClient = initializeApollo();
        const {id} = context.params!;
        console.log('my id' , id);
      try{
        await apolloClient.query({
          query: PRODUCT_QUERY,
          variables: {id: id},
        });
        }
        catch(error){
          console.log(error.networkError.result.errors)
        }
      
        return addApolloState(apolloClient, {
          props: {},
        });
      }
    


export default product
