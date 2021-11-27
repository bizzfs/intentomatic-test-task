import type { AppProps } from 'next/app';
import 'shared/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />; // eslint-disable-line react/jsx-props-no-spreading

export default App;
