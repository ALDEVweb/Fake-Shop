import { motion } from "framer-motion"
import { useContext, useState } from 'react'
import './CartePanier.css'
import { PanierContext } from '../../context/PanierContext'
import PlusMoins from "../plusMoins/PlusMoins";
import MyTag from "../tags/Tag";

export default function CartePanier({produit}){

    const [totalPrix, setTotalPrix] = useState(produit.price * produit.quantite)
    const {supPanier} = useContext(PanierContext)

    function handleQteChange(newQte){
        // fonction callback, au changement de qté dans plusmoins, met à jour le prix total
        setTotalPrix(produit.price * newQte)
    }

    function supProduit(produit){
        supPanier(produit)
    }

    return (
        <motion.div className='containCartPanier' initial={{ left: 0 }} animate={{ right: 0 }} transition={{ duration: 0.5 }}>
            <div className='cartepanier'>
                <div className='imagepanier'><img src={produit.image} alt="" /></div>
                <div className='detailpanier'>
                    <h3>{produit.title}</h3>
                    <div className='ajustPanier'>
                        <PlusMoins id={produit.id} onQteChange={handleQteChange} />
                        <p>{produit.price}$ unit</p>
                        <MyTag type="small">{totalPrix.toFixed(2)}$</MyTag>
                    </div>
                </div>
                <button onClick={()=>supProduit(produit)} className="supProduit"><div className='supProduitTrash'></div></button>
            </div>
        </motion.div>
    )
}