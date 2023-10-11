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
          id: "Id",
          typehere: "Type Here",
          addtask: "Add Task",
          test: "This text is just for testing",
        },
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
          id: "આઈડી",
          typehere: "અહી લખો",
          addtask: "કાર્ય ઉમેરો",
          test: "આ લખાણ માત્ર પરીક્ષણ માટે છે",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
