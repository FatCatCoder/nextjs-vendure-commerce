
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
    // console.log(state)
    // console.log(context)

    // const { loading, error, data } = useQuery(ALL_PRODUCTS_REFETCH_QUERY);
    //   if(loading){return <div>Loading...</div>}
    //     if(error){console.log(error?.networkError)}
    
    const { loading, error, data } = useQuery(PRODUCT_QUERY, {variables: {id: router.query.id}});
      if(loading){return <div>Loading...</div>}
        if(error){return <div>{error?.networkError}</div>}

    const all_products = apolloClient.readQuery({query: ALL_PRODUCTS_QUERY});

    const update_cache = apolloClient.writeQuery(
      {
        query: PRODUCT_QUERY,
        variables: {id: router.query.id},
        data: {
          products: [
            ...all_products?.products?.items, data
          ]
        }
      } 
      );

      console.log('data ', data);
      console.log('readQuery ', all_products);
      console.log('updatedCache', update_cache);

    return (
      <>
        {/* <ProductPageTemplate productData={ data.products.items.find((product: {id: string | number}) => product?.id === router.query.id) } /> */}
        <ProductPageTemplate productData={ data.product } />
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
  const {data} = await apolloClient.query({
    query: ALL_PRODUCTS_QUERY,
  });

    return addApolloState(apolloClient, {
      props: {}
    });

  // const apolloClient = initializeApollo();
  // const {id} = context.params!;
  // try{
  //   await apolloClient.query({
  //     query: PRODUCT_QUERY,
  //     variables: {id: id},
  //     });
  //   }
  //   catch(error){
  //     console.log(error)
  //   }

  //   return addApolloState(apolloClient, {
  //     props: {},
  //   });
}



export default ProductPage
