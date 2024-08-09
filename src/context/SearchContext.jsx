import { createContext, useContext, useState } from "react";

export const SearchContext = createContext({
    etatSearch: [],
    etatTrue: ()=>{},
    etatFalse: ()=>{}
})

export function SearchProvider({children}){
    const [etatSearch, setEtatSearch] = useState(false)

    function etatTrue(){
        setEtatSearch(true)
    }

    function etatFalse(){
        setEtatSearch(false)
    }

    return(
        <SearchContext.Provider value={{etatSearch, etatTrue, etatFalse}}>
            {children}
        </SearchContext.Provider>
    )
}
