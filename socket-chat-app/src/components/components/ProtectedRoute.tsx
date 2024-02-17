import { UserContext } from '@/contexts/UserContext';
import { UserContextType } from '@/types';
import React, { ReactNode, useContext } from 'react'
import { Navigate, useLocation } from 'react-router'

const ProtectedRoute = ({children}:{children:ReactNode}) => {
    const location=useLocation();
    const {User}=useContext<UserContextType>(UserContext);
    if(!User.isLogin)
    {
        console.log(User)
        return <Navigate  to="/auth" state={{from:location}} replace/>
    }
    return children
}

export default ProtectedRoute