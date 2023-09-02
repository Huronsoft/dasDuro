import { createContext, useState } from "react"

const conetxto = createContext ()

const Context_navbar_sup= ({children})   => {
    const [pantalla,setpantalla] = useState('del context')

    return (
       <conetxto.Provider
        value={{
            setpantalla,pantalla
        }}
        >
        {children}
       </conetxto.Provider> 
    )
}

export {Context_navbar_sup}
export default conetxto