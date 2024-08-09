import { useLocation } from 'react-router-dom';
import { PanierContext } from '../../context/PanierContext';
import './PlusMoins.css'
import { useContext, useState } from 'react';

export default function PlusMoins({id, onQteChange, disable}){

    const {panier, updatePanier} = useContext(PanierContext)
    const onPanier = panier.some(p => p.id === id)
    const produit = onPanier ? panier.find(p => p.id === id) : null
    const quantite = onPanier ? produit.quantite : 1
    const [qte, setQte] = useState(quantite)
    const location = useLocation()

    function ajusteQte(action){
        // au clic ajuste la qté + ou - selon l'action demandé, si on est sur page panier, met a jour le panier
        let newQte = qte
        if(action === 'plus'){
            newQte++
            setQte(newQte)
        }else if(action === 'moins'){
            newQte--
            setQte(newQte)
        }
        onQteChange(newQte)
        if(location.pathname == "/panier") updatePanier(produit, newQte)
    }
    
    return (
        <div className="ajusteQte">
            <button onClick={ ()=> ajusteQte("moins") } className="buttonajuste" disabled={disable}>-</button>
            <p>{qte}</p>
            <button onClick={ ()=>ajusteQte("plus") } className="buttonajuste" disabled={disable}>+</button>
        </div>
    )
}