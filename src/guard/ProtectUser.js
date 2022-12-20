import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuthState } from '../context/AuthContext';

function ProtectUser({children}) {
    const {auth }= useAuthState()
    
    if(auth?.user?.role!=="user" ){
       return <Navigate to="/"></Navigate>
    }

    return children;
}

export default ProtectUser