import {ReactNode, createContext} from 'react';
import { UserDataType } from '../types';
import { useState } from 'react';
import { UserContextType } from '../types';
export const UserContext = createContext<UserContextType>({
    User: { username: "", isLogin: false,userId:""},
    setUser: () => {} 
  });
export const UserContextProvider=({children}:{children:ReactNode})=>{
    const [User, setUser] = useState<UserDataType>({
        username:"",
        userId:"",
        isLogin:false,
    });
    return <UserContext.Provider value={{User,setUser}}>
        {children}
    </UserContext.Provider>
}