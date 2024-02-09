export type UserContextType={
  userData:UserDataType,
  setUser: React.Dispatch<React.SetStateAction<UserContextType | undefined>>
}

export type UserDataType={
    username:string,
    isAdmin:boolean,
}