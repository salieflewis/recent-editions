import 'styles/globals.css';
import 'styles/styles.css';
import '@zoralabs/zord/index.css';
import {
  ThemeProvider,
  lightTheme,
  darkTheme,
} from '@zoralabs/zord';
import type { AppProps } from 'next/app';

import { WagmiConfig, createClient } from 'wagmi';
import {
  ConnectKitProvider,
  getDefaultClient,
} from 'connectkit';


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
      <ConnectKitProvider>
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
