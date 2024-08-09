import { useState, useEffect, useContext } from 'react';
import './NavBar.css'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { PanierContext } from '../../context/PanierContext';

export default function NavBar() {

  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const nav = useNavigate();
  const {panier} = useContext(PanierContext)
  const totArt = totalArticle()

  function totalArticle(){
      let total = 0;
      panier.forEach(article => {
          total += article.quantite
      });
      return total;
  }

  useEffect(()=>{
    // surveillance de la page (pour les cas ou on change de page autrement qu'avec la tabBar)
    setValue(location.pathname)  
  },[location.pathname])

  const handleChange = (event, newValue) => {
    // utilisation d'un composant MUI
    setValue(newValue);
    nav(newValue)
  };

  return (
    
    <BottomNavigation className='navBar' value={value} onChange={handleChange}>
      <BottomNavigationAction
        value="/"
        icon={<HomeOutlinedIcon sx />}
      />
      <BottomNavigationAction
        value="/panier"
        icon={<ShoppingCartOutlinedIcon />}
      />
      <p className={`countPanier ${value == "/panier" ? 'countPanierCheck' : null}`}>{totArt > 0 ? totArt : null}</p>
      <BottomNavigationAction
        value="/account"
        icon={<PersonOutlineOutlinedIcon />}
        disabled={true}
      />
      <BottomNavigationAction
        value="/folder"
        icon={<SettingsOutlinedIcon />}
        disabled={true} 
      />
    </BottomNavigation>
  );
}
