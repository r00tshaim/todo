// pages/_app.js
import '../styles/globals.css'; // Add any global styles you have

import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n'; // Import the initialized i18n
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
