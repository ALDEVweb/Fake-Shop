import { createContext, useContext, useEffect, useState } from "react";

export const ProduitContext = createContext([])

export function ProduitProvider({children}){
    const [produits, setProduits] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProduits(json))
    },[])

    return(
        <ProduitContext.Provider value={produits}>
            {children}
        </ProduitContext.Provider>
    )
}

// création de notre propre hook
export function useProduit(){
  const produits = useContext(ProduitContext)
  return produits
}