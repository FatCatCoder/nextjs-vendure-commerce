// @refresh reset
import { AppContext, AppInitialProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

//import '../styles/globals.css'

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}