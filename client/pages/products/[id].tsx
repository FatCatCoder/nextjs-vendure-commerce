// @refresh reset
import type { NextPage } from 'next'
import {useRouter} from 'next/router';
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { GetStaticPaths, GetStaticProps } from 'next'

// components
import ProductPageTemplate from '../../components/ProductPageTemplate';
import { ALL_PRODUCTS_QUERY, PRODUCT_QUERY } from '../../utils/graphql/queries';
import { Product } from '../../types/product';

const ProductPage: NextPage = (context) => {
    const router = useRouter();
    const apolloClient = initializeApollo();
    const state = apolloClient.extract();
    
    const { loading, error, data } = useQuery(PRODUCT_QUERY, {variables: {id: router.query.id}});
      if(loading){return <div>Loading...</div>}
        if(error){console.log(error?.networkError)}

    return (
      <>
        <ProductPageTemplate productData={data.product} />
      </> 
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const apolloClient = initializeApollo();
  
  const { data } = await apolloClient.query({
    query: ALL_PRODUCTS_QUERY,
  });

  const paths = data.products.items.map((product: Product) => ({
      params: {id: product.id},
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();
  const {id} = context.params!;
  try{
    await apolloClient.query({
      query: PRODUCT_QUERY,
      variables: {id: id},
      });
    }
    catch(error){
      console.log(error)
    }

    return addApolloState(apolloClient, {
      props: {},
    });
}



export default ProductPage
