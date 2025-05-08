import AppRoutes from "./routes/AppRoutes";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

const savedLanguage = localStorage.getItem("language") || "en";
i18n.changeLanguage(savedLanguage);

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <AppRoutes />;
      </I18nextProvider>
    </>
  );
};

export default App;
