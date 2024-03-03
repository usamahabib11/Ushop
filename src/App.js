import React from "react";
import { Route,Routes} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Daily from "./Daily";
import TwoPieceSuit from "./TwoPieceSuit";
import Lawn from "./Lawn";
import SuitOnePiece from "./SuitOnePiece";
import SuitThreePiece from "./SuitThreePiece";
import Yumna from "./Yumna";
function App()
{
  return(
    <>
    <Header/>
  <Routes>
  <Route path={"/"} Component={Home}/>
  <Route path={"/Header"} Component={Header}/>
    <Route path={"/Daily"} Component={Daily}/>
    <Route path={"/SuitOnePiece"} Component={SuitOnePiece}/>
    <Route path={"/Yumna"} Component={Yumna}/>
    <Route path={"/TwoPieceSuit"} Component={TwoPieceSuit}/>
    <Route path={"/SuitThreePiece"} Component={SuitThreePiece}/>
    <Route path={"/Lawn"} Component={Lawn}/>
  
  </Routes>
 
  </>
   
  )
}
export default App;



