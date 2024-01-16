import { TAuthRequest, TUserData } from "@src/@types/types";
import { createContext } from "react";

export enum Auth_Stage_Enum {
    AUTHORIZED = "authorized",
    UNAUTHORIZED = "unauthorized"
}

interface TAuthContext {
    authStage: Auth_Stage_Enum,
    setAuthStage: React.Dispatch<React.SetStateAction<Auth_Stage_Enum>>,
    userData?: TUserData, 
    setAuthData: (e:TAuthRequest)=> void,
    logout: () => void,
}

export const AuthContext = createContext<TAuthContext>({
    authStage: Auth_Stage_Enum.UNAUTHORIZED,
    setAuthStage: ()=> {},
    userData: undefined,
    setAuthData: ()=> {},
    logout: () => {},
})