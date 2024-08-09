import * as React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/routes/Root";
import Home from "./components/routes/Home";
import Produit from "./components/routes/produit";
import Panier from "./components/routes/Panier";
import { ProduitContext, ProduitProvider } from "./context/ProduitContext";
import { useContext } from "react";
import PanierProvider from "./context/PanierContext";
import { SearchProvider } from "./context/SearchContext";


function App() {
  const produits = useContext(ProduitContext)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "produit/:produitId",
          element: <Produit />
        },
        {
          path: "panier",
          element: <Panier />
        }
      ]
    },
  ]);
  
  return (
    <div className="body">
      <SearchProvider>
        <ProduitProvider>
          <PanierProvider>
            <RouterProvider className='router' router={router} />
          </PanierProvider>
        </ProduitProvider>
      </SearchProvider>
    </div>
  )
}

export default App
