import {useLocation, Navigate} from 'react-router-dom'
import React from 'react';
import useAuth from "../hook/useAuth";


function RequireAuth({children}) {
    const location = useLocation();
    const {user} = useAuth();

    if (!user){
        return <Navigate to="/login" state={{from: location}}></Navigate>
    }
    return children
}

export default RequireAuth;