import React from "react"
import "./index.css"
import { Link } from "react-router-dom";

function Header()
{
return(
  <>
  
    <header>
      
      <nav>
        
      <div className="background">
      <p className="u">U</p> <h1 className="sapphire"> shop</h1>
        <input type="text" name="search" placeholder="Find Your Favourites" className="search" />
        <img className="searchicon" src="search-icon-png-21.png" alt="" />
        
        {<Link className="Home" to={"/"}>Home</Link>}
        
        
       
        <img className="baglogo" src="https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-shopping-bag-graphic-design-template-png-image_690677.jpg" alt="" />
        
        
     <img className="dlogo" src="https://cdn2.vectorstock.com/i/1000x1000/24/16/delivery-van-with-deliveryman-vector-20962416.jpg" alt="" />
     
       
     <p className="space">|</p>
      <img className="loginlogo" src="https://i.pinimg.com/736x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg" alt="" />
      <p className="slt">Signup/Login</p>
        
        
        </div>
      </nav>
    </header>
    <section>
      <div className="toplist">
       
     {<Link className="listso" to={""}>NEW IN</Link>}
     
      {<Link className="listso" to={""}>WOMEN</Link>}
     
      {<Link className="listso" to={""}>MAN</Link>}
     
      {<Link className="listso" to={""}>KIDS</Link>}
      
      {<Link className="listso" to={""}>BEAUTY</Link>}
      
      {<Link className="listso" to={""}>ACCESSORIES</Link>}
      
      {<Link className="listso" to={""}>SPECIAL OFFERS</Link>}
      
      
      </div>
      
  
    </section>
    
  </>
)
}
export default Header;