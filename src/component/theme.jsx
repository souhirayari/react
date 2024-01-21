

import { useState,createContext} from "react"

 const DarkmodeContext=createContext()
 const ClickContext=createContext()
 


export default function DarkMode({children}){
   
    const [isDark,setDark]=useState(false)

 const handleclick=()=>{
        setDark( isDark => !(isDark))   
    }

    return(
        <>
        <DarkmodeContext.Provider value={isDark}>
        <ClickContext.Provider value={handleclick}>
          {children}  
          </ClickContext.Provider>     
        </DarkmodeContext.Provider>
        </>
    )
}