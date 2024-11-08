import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

 
    const [userData,setUserData] = useState([])

    

    useEffect(()=>{
        setLocalStorage()
         const {employees,Admin} = getLocalStorage()
         setUserData({employees,Admin})
    },[])


  return (
    <div>
    <AuthContext.Provider  value={userData}>
    {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
