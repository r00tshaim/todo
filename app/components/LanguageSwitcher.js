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

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className="btn btn-primary mr-4" onClick={() => changeLanguage('en')}>English</button>
      <button className="btn btn-secondary" onClick={() => changeLanguage('gu')}>Gujarati</button>
    </div>
  );
};

export default LanguageSwitcher;
