import { Link } from "react-router-dom";
import MyTag from "../tags/Tag";
import './CarteProduit.css'

export  default function Carteproduit({produit}){
    return (
        <Link to={`/produit/${produit.id}`}>
            <div className="carteProduit">
                <div className="imageCarteProduit"><img src={produit.image} alt="" /></div>
                <h3>{produit.title}</h3>
                <MyTag className="tag" type="small">{produit.price.toFixed(2)}$</MyTag>
            </div>
        </Link>
    )
}