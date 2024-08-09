import './Route.css'
import { useProduit } from '../../context/ProduitContext';
import { useContext, useEffect, useState } from 'react';
import Banniere from '../banniere/Banniere';
import Boutton from '../boutons/Boutton';
import ListeProduit from '../listeProduit/ListeProduit';
import { SearchContext } from '../../context/SearchContext';

export default function Home(){
    const produits = useProduit()
    const [listProduit, setListProduit] = useState(produits)
    const [buttonCheck, setButtonCheck] = useState("all");
    const [searchCrit, setSearchCrit] = useState("")
    const {etatSearch, etatFalse}  = useContext(SearchContext)
    
    function handleClickCloseSearch(){
        etatFalse()
        setSearchCrit("")
    }

    function ListProduit(crit, searchCrit){
        // crée la liste de produit à afficher en fonction de la catégorie demandé, si il y a une valeur dans le champ de recherche, modifie cette liste avec la liste correspondant à la recherche
        let newList = []
        if(crit == "all"){
            newList = produits
        }else if(crit == 'women'){
            newList = produits.filter(produit => produit.category == "women's clothing")
        }else if(crit == 'men'){
            newList = produits.filter(produit => produit.category == "men's clothing")
        }else if(crit == 'jewelery'){
            newList = produits.filter(produit => produit.category == "jewelery")
        }else if(crit == 'electronics'){
            newList = produits.filter(produit => produit.category == "electronics")
        }
        if(searchCrit != ""){
            newList = newList.filter(produit => produit.title.toLowerCase().includes(searchCrit.toLowerCase()))
        }
        setListProduit(newList)
    }

    function handleClick(crit){
        // au click attribue la valeur clicé au bouton pour qu'il prenne la bonne couleur
        setButtonCheck(crit)
    }

    useEffect(()=>{
        // surveille le changement du tableau de produits, de la variable buttoncheck et search pour lancer listProduit
        ListProduit(buttonCheck, searchCrit)
    },[produits, buttonCheck, searchCrit])

    function handleChange(e){
        // au changement de valeur de la recherch, met à jour la variable
        setSearchCrit(e.target.value)
    }
    
    return(
        <div className="home">
            <Banniere />
            <div className='containerCatBar'>
                <div className="categorieBar">
                    <Boutton onClick={()=>handleClick("all")} type="filtre" className={buttonCheck === "all" ? "buttonCatCheck" : "buttonCatUncheck"}>All</Boutton>
                    <Boutton onClick={()=>handleClick("women")} type="filtre" className={buttonCheck === "women" ? "buttonCatCheck" : "buttonCatUncheck"}>Women</Boutton>
                    <Boutton onClick={()=>handleClick("men")} type="filtre" className={buttonCheck === "men" ? "buttonCatCheck" : "buttonCatUncheck"}>Men</Boutton>
                    <Boutton onClick={()=>handleClick("jewelery")} type="filtre" className={buttonCheck === "jewelery" ? "buttonCatCheck" : "buttonCatUncheck"}>Jewelery</Boutton>
                    <Boutton onClick={()=>handleClick("electronics")} type="filtre" className={buttonCheck === "electronics" ? "buttonCatCheck" : "buttonCatUncheck"}>Electronics</Boutton>
                </div>
            </div>
            <div className={`recherche ${etatSearch ? "rechercheVisible" : ""}`}>
                <label htmlFor='search'><div className='pict30 search'></div></label>
                <input onChange={handleChange} type="text" name="search" id="search" value={searchCrit}/>
                <button className='pict30 close' onClick={handleClickCloseSearch}></button>
            </div>
           <ListeProduit listeProduit={listProduit}/>
        </div>
    )
}