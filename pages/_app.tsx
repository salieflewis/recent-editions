// import '@fontsource/inter/400.css';
// import '@fontsource/inter/600.css';

import '@zoralabs/zord/index.css';
import { ThemeProvider, lightTheme } from '@zoralabs/zord';
import type { AppProps } from 'next/app';

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
