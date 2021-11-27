import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import '@shared/styles/globals.scss';

Modal.setAppElement('#__next');

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />; // eslint-disable-line react/jsx-props-no-spreading

export default App;
