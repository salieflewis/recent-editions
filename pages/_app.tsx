// import '@fontsource/inter/400.css';
// import '@fontsource/inter/600.css';

import '@zoralabs/zord/index.css';
import { ThemeProvider, lightTheme } from '@zoralabs/zord';
import type { AppProps } from 'next/app';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet',
  cache: new InMemoryCache(),
});

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
