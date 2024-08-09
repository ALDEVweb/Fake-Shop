import Carteproduit from "../carteProduit.jsx/CarteProduit"
import './ListProduit.css'


export default function ListeProduit({listeProduit}){
    return (
        <div className="listContainer">
            {
                listeProduit.map(produit => {
                    return <Carteproduit key={produit.id} produit={produit} />
                })
            }
        </div>
    )
}