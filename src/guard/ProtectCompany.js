import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuthState } from '../context/AuthContext';

function ProtectCompany({children}) {
    const {auth} = useAuthState()
   
    if(auth?.user?.role!=="companyuser" ){
       return <Navigate to="/"></Navigate>
    }

    return children;
}

export default ProtectCompany