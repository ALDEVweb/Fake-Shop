import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Route.css'



export default function Root() {
  const themeNav = createTheme({
    // création d'un theme perso pour la tabBar MUI (changement de la couleur principale)
      palette: {
          primary: {
          main: '#FCA436',
          },
      }
  });


  return (
    <div className="application">
        <Header />
        <Outlet />
        <ThemeProvider theme={themeNav}>
          <NavBar />
        </ThemeProvider>
    </div>
  );
}