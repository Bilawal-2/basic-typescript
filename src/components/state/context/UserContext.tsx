import React, {useState, createContext} from 'react'

export type AuthUser ={
    name:string
    email:string
}

type UserContextType = {
    user: AuthUser | null
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType|null>(null)

export const UserContextProvider = ({children}:UserContextProviderProps)=>{
    const [user,setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value = {{user,setUser}}>{children}</UserContext.Provider>

}