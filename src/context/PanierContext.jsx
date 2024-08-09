import { useState } from "react";
import { createContext } from "react";

export const PanierContext = createContext({
    panier: [],
    addPanier: ()=>{},
    supPanier: ()=>{},
    updatePanier: ()=>{},
    initPanier: ()=>{}
})

export default function PanierProvider({children}){

    const [panier, setPanier] = useState([])

    function addPanier(produit, qte){
        // ajoute le produit sélectionné au panier
        let prodPanier = {...produit, quantite: qte }
        setPanier([...panier, prodPanier]);
    }
    function supPanier(produit){
        // reconstruit le panier en retirant le produit selectionné
        setPanier(panier.filter(prodPanier => prodPanier.id !== produit.id));
    }
    function updatePanier(produit, qte){
        // met à jour le produit selectionné dans le panier
        let prodPanier = panier.find(prodPanier => prodPanier.id === produit.id)
        prodPanier.quantite = qte
        setPanier([...panier]);
    }
    function initPanier(){
        setPanier([])
    }


    return(
        <PanierContext.Provider value={{panier, addPanier, updatePanier, supPanier, initPanier}}>
            {children}
        </PanierContext.Provider>
    )
}