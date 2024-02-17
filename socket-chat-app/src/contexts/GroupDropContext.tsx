import React, { createContext, useState, useContext, ReactNode } from "react";


interface User {
  id: string;
  name: string;

}

interface SelectedUserContextType {
  selectedUsers: User[];
  setSelectedUsers: (users: User[]) => void;
}

const SelectedUserContext = createContext<SelectedUserContextType>({
  selectedUsers: [],
  setSelectedUsers: () => {},
});

export const SelectedUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  return (
    <SelectedUserContext.Provider value={{ selectedUsers, setSelectedUsers }}>
      {children}
    </SelectedUserContext.Provider>
  );
};

export const useSelectedUsers = (): SelectedUserContextType => {
    return useContext(SelectedUserContext);
  };