export enum LANGUAGE_ENUM {
    KA = "ka",
    EN = "en",
  }

export interface TFlags {
    [LANGUAGE_ENUM.KA]: string;
    [LANGUAGE_ENUM.EN]: string;
}

export enum BUTTON_TYPE_ENUM {
  DEFAULT = "default",
  PRIMARY = "primary"
}
export interface RegistrationFormInput {
  name:string;
  surname:string;
  email:string;
  phoneNumber:string;
  password:string;
}

export interface AuthorizationFormInput {
  phoneNumber:string;
  password:string;
}

export interface CartITem {
  
}