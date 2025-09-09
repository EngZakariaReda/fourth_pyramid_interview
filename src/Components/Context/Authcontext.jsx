import { createContext, useState } from "react"

export const Authcontext = createContext()

export default function Authcontextprovider({children}) {
    const [viewsidebar , setviewsidebar] = useState(false)
  return (
    <>
        <Authcontext.Provider value={{viewsidebar , setviewsidebar}}>
            {children}
        </Authcontext.Provider>
    </>
  )
}
