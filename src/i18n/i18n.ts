import i18n from "i18next";
import { initReactI18next } from "react-i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: {
        [key: string]: string;
      };
    };
  }
}

const resources = {
  cs: {
    translation: {
      // main page
      welcome: "Díky, že to nenecháváte být",
      schoolReport: "Moje základní/střední škola 🎓",
      organisationReport: "Moje organizace 🏢",
      findSchool: "-- Vyhledej školu --",
      findOrganisation: "-- Vlož kód organizace --",
      findSchoolTest: "Testovací škola - Neboj se NNTB vyzkoušet",
      encryptInfo:
        "Veškerá komunikace je anonymní a šifrovaná. Zjistit více o anonymitě",
      footerText: "Systém poskytovaný společností",
      nextButton: "Pokračovat",
      labelSchool: "Škola",
      labelOrganisation: "Kód organizace",
      errorOrganizationCode: "Nesprávný přístupový kód.",
      // /infopage
      infopageTitle: "Testovací online schránka důvěry",
      infopageBoldText:
        "Tato schránka důvěry není opravdová. Můžeš si přes ni ale vyzkoušet poslat zkušební oznámení a podívat se, jak funguje.",
      infopageText1:
        "Přes online schránku důvěry Nenech to být (NNTB) se mohou ozvat všichni, kteří jsou svědkem či obětí šikany, nevhodného jednání nebo mají problém, o kterém se stydí mluvit osobně. Oznámení jsou anonymní, proto se žáci nemusí bát, že by se oznámení obrátilo proti nim.",
      infopageText2:
        "Pokud chceš upozornit na opravdový případ šikany, vyhledej svoji školu a odešli oznámení této škole. V případě ohrožení života volej 112.",
      createReportButton: "+ Vytvořit testovací oznámení",
      goBackButton: "Jít zpět do vyhledávání škol",
      // /newnotification
      newNotificationTitle: "Nové oznámení",
      labelCategory: "Kategorie",
      labelChooseNotification: "Vyberte jednu možnost",
      notification1: "Šikana, špatné chování",
      notification2: "Potíže s učením",
      notification3: "Problémy doma",
      notification4: "Něco jiného",
      // /formpage
      labelName: "Jméno",
      labelAge: "Věk",
      loadFile: "Nahraj soubor",
      personalDataInfo:
        "Seznamte se s informacemi o tom, <1>jak zpracováváme osobní údaje</1>.",
      sendButton: "Odeslat",
      // /finalpage
      finalPageTitle: "Oznámení bylo odesláno",
      finalPageText: `Ve vyhledávání jsi zvolil/a "Testovací školu", díky které si můžeš vyzkoušet, jak formulář funguje. Pokud chceš upozornit na opravdový případ šikany, vyhledej svoji školu a odešli oznámení na ni. V případě vážného ohrožení života volej 112.`,
      finalPageBackButton: "Zpět na úvodní stránku",
      finalPageListButton: "Seznam oznámení",
      // /notificationlist
      admistrationTitle: "Administrace oznámení",
      newNotificationButton: "Vložit nové oznámení",
      detailButton: "Detail",
      deleteButton: "Smazat",
      downloadFile: "Stáhnout soubor",
      // /notificationdetail
      entityName: "Název entity",
      file: "Soubor",
      back: "Zpět",
      edit: "Editovat",
      notificationDetail: "Detail oznámení",
      // errors
      idError: "Chybějící ID poznámky.",
      savingError: "Chyba při ukládání.",
      dbConnection: "Připojeno k MongoDB",
      dbConnectionError: "Chyba při připojení k MongoDB:",
      //
      notFoundMessage: "Jejda, tato stránka neexistuje. Klikni <1>sem</1>.",
    },
  },
  en: {
    translation: {
      // main page
      welcome: "Thank you for speaking up",
      schoolReport: "My primary/secondary school 🎓",
      organisationReport: "My organisation 🏢",
      findSchool: "-- Find a school --",
      findOrganisation: "-- Insert organisation code --",

      findSchoolTest: "Test school - Don't be afraid to use NNTB",
      encryptInfo:
        "All communication is anonymous and encrypted. Learn more about anonymity",
      footerText: "System provided by",
      nextButton: "Continue",
      labelSchool: "School",
      labelOrganisation: "Access code",
      errorOrganizationCode: "Incorrect access code.",
      // /infopage

      infopageTitle: "Test Online Trust Box",
      infopageBoldText:
        "This trust box is not real. However, you can try sending a test report through it and see how it works.",
      infopageText1:
        "Anyone who is a witness or victim of bullying, inappropriate behaviour or has a problem they are ashamed to talk about personally can reach out through the FaceUp online trust box. The cases are anonymous, so students do not have to worry about the case being used against them.",
      infopageText2:
        "If you want to report a real case of bullying, find your school and send a report to them. In case of a life-threatening emergency, call 112.",
      createReportButton: "+ Create a Test Report",
      goBackButton: "Go back to school search",
      // /newnotification
      newNotificationTitle: "New Case",
      labelCategory: "Category",
      labelChooseNotification: "Choose one option",
      notification1: "Bullying, inappropriate behavior",
      notification2: "Learning difficulties",
      notification3: "Problems at home",
      notification4: "Something else",
      // /formpage
      labelName: "Name",
      labelAge: "Age",
      loadFile: "Upload file",
      personalDataInfo: "Read more about <1>how we process personal data</1>.",
      sendButton: "Submit",
      // /finalpage
      finalPageTitle: "The report has been sent",
      finalPageText:
        "In the search, you selected 'Test School,' which allows you to try out how the form works. If you want to report a real case of bullying, find your school and submit a report to it. In case of a serious life-threatening situation, call 112.",
      finalPageBackButton: "Back to the home page",
      finalPageListButton: "List of reports",
      // /notificationlist

      admistrationTitle: "Administration of Reports",
      newNotificationButton: "Insert new report",
      detailButton: "Detail",
      deleteButton: "Delete",
      downloadFile: "Download file",
      entityName: "Entity name",
      file: "File",
      back: "Back",
      edit: "Edit",
      notificationDetail: "Notification detail",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "cs",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
