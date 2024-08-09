
import { useParams } from "react-router-dom"
import { useProduit } from "../../context/ProduitContext";
import MyTag from "../tags/Tag";
import Boutton from "../boutons/Boutton";
import { useContext, useEffect, useState } from "react";
import { PanierContext } from "../../context/PanierContext";
import PlusMoins from "../plusMoins/PlusMoins";

export default function Produit(){

    const {panier, addPanier, supPanier} = useContext(PanierContext)
    const {produitId} = useParams();
    const produits = useProduit()
    const produit = produits.find(p => p.id == produitId)
    const prodInPanier = panier.some(p => p.id == produitId)
    const [onPanier, setOnPanier] = useState(prodInPanier)
    const colorNotation = produit.rating.rate*20
    const quantite = onPanier ? produit.quantite : 1
    const [qte, setQte] = useState(quantite)


    function addProduit(){
        // ajoute le produit et sa qté au panier
        addPanier(produit, qte)
    }
    function supProduit(){
        // sup le produit selectionne
        supPanier(produit)
    }

    useEffect(()=>{
        // surveille le changement du panier, et vérifie si l'article affiché y est présent
        setOnPanier(prodInPanier)
    },[panier])

    function handleQteChange(newQte){
        // fonction callback de la fonction plusmoins, qui retourne la qté sélectionné
        setQte(newQte)
    }
  
    return(
        
        <div className="produit">
            <div className="imageDetailProduit"><img src={produit.image} alt="" /></div>
            <div className="detailproduit">
                <div className="prixproduit">
                    <h3>{produit.title}</h3>
                    <MyTag type="large">{produit.price.toFixed(2)}$</MyTag>
                </div>
                <div className="noteproduit">
                    <div className="rating">
                        <div className="coloration"  style={{ width: `${colorNotation}%` }}></div>
                        <div className="etoile"><img src='../../../public/images/Exclude.png' alt="" /></div>
                    </div>
                    <p>({produit.rating.count} rating)</p>
                </div>
                <p className="description">{produit.description}</p>
                <div className="quantite">
                    <h4>Quantity:</h4>
                    <PlusMoins id={produit.id} onQteChange={handleQteChange} disable={onPanier}/>
                </div>
                {
                    onPanier ? <Boutton onClick={supProduit} type="large" className="supprimButton"><div className="picto trash"></div> Remove from cart</Boutton> : <Boutton onClick={addProduit} type="large" className="ajoutButton"><div className="picto cart"></div> Add to cart</Boutton>
                }
            </div>
        </div>
    )
}