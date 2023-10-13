/*export default function LanguageSwitcher() {
    return (
      <div>
        <select>
          <option value='en'>English</option>
          <option value='es'>Español</option>
        </select>
      </div>
    );
}*/
// LanguageSwitcher.js
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lng);
    }
  };

  return (
    <div>
      <button className="btn btn-primary mr-4" onClick={() => changeLanguage('en')}>English</button>
      <button className="btn btn-secondary" onClick={() => changeLanguage('gu')}>Gujarati</button>
      <button>
        <Link className='btn btn-outline btn-success ml-10' href="/next">Next Page</Link>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
