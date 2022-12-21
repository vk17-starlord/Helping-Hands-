import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuthState } from '../context/AuthContext';

function ProtectAdmin({children}) {
    const {auth} = useAuthState()
  
    if(auth?.user?.role!=="admin" ){
       return <Navigate to="/"></Navigate>
    }

    return children;
}

export default ProtectAdmin