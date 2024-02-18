export type UserContextType={
  User:UserDataType,
  setUser:React.Dispatch<React.SetStateAction<UserDataType>>
}

export type UserDataType={
    username:string,
    userId:string,
    isLogin:boolean,
}