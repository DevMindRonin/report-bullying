export const locales = ["cs", "en"] as const;
export const defaultLocale = "cs" as const;

export type Locale = (typeof locales)[number];

export interface Dictionary {
  save: string;
  cancel: string;
  entityType: string;
  welcome: string;
  schoolReport: string;
  organisationReport: string;
  findSchool: string;
  findOrganisation: string;
  findSchoolTest: string;
  encryptInfo: string;
  footerText: string;
  nextButton: string;
  labelSchool: string;
  labelOrganisation: string;
  errorOrganizationCode: string;
  infopageTitle: string;
  infopageBoldText: string;
  infopageText1: string;
  infopageText2: string;
  createReportButton: string;
  goBackButton: string;
  newNotificationTitle: string;
  labelCategory: string;
  labelChooseNotification: string;
  notification1: string;
  notification2: string;
  notification3: string;
  notification4: string;
  labelName: string;
  labelAge: string;
  loadFile: string;
  personalDataInfo: string;
  sendButton: string;
  finalPageTitle: string;
  finalPageText: string;
  finalPageBackButton: string;
  finalPageListButton: string;
  admistrationTitle: string;
  newNotificationButton: string;
  detailButton: string;
  deleteButton: string;
  downloadFile: string;
  entityName: string;
  file: string;
  back: string;
  edit: string;
  notificationDetail: string;
  idError: string;
  savingError: string;
  dbConnection: string;
  dbConnectionError: string;
  notFoundMessage: string;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
