import { useContext, useEffect } from "react"
import CartePanier from "../cartePanier/CartePanier"
import { PanierContext } from "../../context/PanierContext";
import MyTag from "../tags/Tag";
import Boutton from "../boutons/Boutton";

export default function Panier(){

    const {panier} = useContext(PanierContext)
    const totArt = totalArticle()
    const totPrice = totalPrice()

    function totalArticle(){
        // calcul le nombre d'article dans le panier
        let total = 0;
        panier.forEach(article => {
            total += article.quantite
        });
        return total;
    }

    function totalPrice(){
        // calcul le prix total du panier
        let total = 0; 
        panier.forEach(article => {
            total += article.price * article.quantite
        });
        return total.toFixed(2);
    }

    return(
        <div className="panier">
            <div className="listPanier">
                {
                    panier.map((produit, index) => {
                        return <CartePanier key={produit.id} produit={produit} />
                    })
                }
            </div>
            <div className="finalisation">
                <div className="prixpanier">
                    <p className="texteTotal">Total:</p>
                    <p className="nbrearticle">{totArt} article(s)</p>
                    <MyTag type="small" >{totPrice}$</MyTag>
                </div>
                <p className="infoTrsprt">Transport is free ! You will receive your products under 4 days</p>
                <div className="paiement">
                    <div className="typePaiement">
                        <div className="pict30 visa"></div>
                        <div className="pict30 mc"></div>
                        <div className="pict30 pp"></div>
                    </div>
                    <Boutton type="small" className="paiementBut"><div className="pict22 coins"></div> Payment</Boutton>
                </div>
            </div>
        </div>
    )
}