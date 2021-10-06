import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router';
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { GetStaticPaths, GetStaticProps } from 'next'
import ProductPage from '../../components/ProductPage';
import { ALL_PRODUCTS_QUERY,PRODUCT_QUERY } from '../../utils/graphql/queries';

const Product: NextPage = (context) => {
    const router = useRouter();
    const apolloClient = initializeApollo();
    const state = apolloClient.extract();
    
    const { loading, error, data } = useQuery(PRODUCT_QUERY, {variables: {id: router.query.id}});
      if(loading){return <div>Loading...</div>}
        if(error){console.log(error?.networkError)}

    return (
      <>
      <div className="container">
          <h1 className="display-1">You are Viewing product {data.product.name}</h1>
          <ProductPage productData={data.product} />
      </div>
      </>
      
  )
}


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

//export async function getStaticProps(context: GetStaticPropsContext) {
    export const getStaticProps: GetStaticProps = async (context) => {
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
          console.log(error?.networkError?.result?.errors)
        }
      
        return addApolloState(apolloClient, {
          props: {},
        });
      }
    


export default Product
