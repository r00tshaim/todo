// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
        en: {
          translation: {
            welcome: "Welcome",
            todo: "To Do",
            edit: "Edit",
            delete: "Delete",
            profile: "Profile",
            new: "New",
            settings: "Settings",
            logout: "Logout",
            task: "Task",
            action: "Action",
          }
        },
        gu: {
          translation: {
            welcome: "આપનું સ્વાગત છે",
            todo: "શું કરવું એપ્લિકેશનમાં",
            edit: "ફેરફાર કરો",
            delete: "કાઢી નાખો",
            profile: "પ્રોફાઇલ",
            new: "નવું",
            settings: "સેટિંગ્સ",
            logout: "લૉગ આઉટ",
            task: "કાર્ય",
            action: "ક્રિયા", 
          }
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
});

export default i18n;
