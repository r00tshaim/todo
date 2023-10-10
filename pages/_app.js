// pages/_app.js
import '../styles/globals.css'; // Add any global styles you have

import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n'; // Import the initialized i18n

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
