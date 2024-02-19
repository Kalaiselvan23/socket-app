import { ReactNode, createContext, useContext, useState } from "react";
type selectedChatContextType={
    chat:{
        chatId:string,
        chatName:string,
    },
    setChat:React.Dispatch<React.SetStateAction<string>>,
}
export const SelectedChatContext=createContext<selectedChatContextType>({
    chat:{
        chatId:"",
        chatName:"",
    },
    setChat:()=>{}
});

export const SelectedChatContextProvider=({children}:{children:ReactNode})=>{
    const [chat,setChat]=useState<string>("");
    return <SelectedChatContext.Provider value={{chat,setChat}}>
        {children}
    </SelectedChatContext.Provider>
}
export const useSelectedChat=():selectedChatContextType=>{
    return useContext(SelectedChatContext)
}