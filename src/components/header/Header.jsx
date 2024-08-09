import { Link, useLocation } from 'react-router-dom';
import './Header.css'
import { SearchContext } from '../../context/SearchContext';
import { useContext } from 'react';
import { PanierContext } from '../../context/PanierContext';

export default function Header(){
    const location = useLocation();
    const {etatSearch, etatTrue}  = useContext(SearchContext)
    const {initPanier} = useContext(PanierContext)

    function clickSearch(){
        etatTrue()
    }
    function clickTrash(){
        initPanier()
    }

    return (

        <div className="header">
            <div className="header-titre">
                { location.pathname !== '/' ? <Link to={'/'}><div className="picto retour"></div></Link> : null }
                <h1>Fake Shop</h1>
            </div>
            { location.pathname === '/' ? <button onClick={clickSearch} className='loupe'></button> : null}
            
            { location.pathname === '/panier' ? <button onClick={clickTrash} className='videTrash'>Vider mon panier</button> : null}
        </div>
    )
}