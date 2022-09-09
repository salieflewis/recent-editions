import 'styles/globals.css';
import 'styles/styles.css';
import '@zoralabs/zord/index.css';
import {
  ThemeProvider,
  lightTheme,
  darkTheme,
} from '@zoralabs/zord';
import type { AppProps } from 'next/app';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import { WagmiConfig, createClient } from 'wagmi';
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from 'connectkit';

const apolloClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet',
  cache: new InMemoryCache(),
});

const alchemyId = process.env.NEXT_ALCHEMY_KEY;

const client = createClient(
  getDefaultClient({
    appName: 'recent editions',
    alchemyId,
  })
);

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ApolloProvider client={apolloClient}>
        <ConnectKitProvider>
          <ThemeProvider theme={lightTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ConnectKitProvider>
      </ApolloProvider>
    </WagmiConfig>
  );
}
