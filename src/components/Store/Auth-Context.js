import React from 'react'

const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:()=>{},
    logOut:()=>{}
})

export  default AuthContext