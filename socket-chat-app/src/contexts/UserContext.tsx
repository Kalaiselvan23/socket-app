import React, { ReactNode, createContext, useState } from "react";
import { UserContextType,UserDataType} from "@/types";
const userContext=createContext<UserContextType|null>(null);


export const UserContextProvider=({children}:{children:ReactNode})=>{
    const [userData,setUser]=React.useState<UserDataType| null>(null);
    return <userContext.Provider value={{userData,setUser}}>
        {children}
    </userContext.Provider>

}