
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Usama from './Usama'

export default function Cards() {
  function bagAlert()
  {
    alert("Please Check Your Bag")
  }
  return (
  <>
  
        <div className='suitslist'>
<p className='toplistname'>UNSTITCHED</p>

<div className='suitcarts1'>
  {<Link className='suittag' to={"/SuitOnePiece"}><figure><img className='topsuitslist' src="unstitched___1_piece_6812fa34-20ce-4e8f-8b3e-f03fb4eda0e0.avif" alt="" /><figcaption className='tagm'>1 Piece</figcaption></figure></Link>}

 
  
</div>

<div className='suitcarts1'>
 {<Link className='suittag' to={"/Daily"}> <figure><img className='topsuitslist' src="unstitched___2_piece.avif" alt="" /><figcaption className='tagm'>Daily</figcaption></figure></Link>}
 
 
  </div>
  


<div className='suitcarts1'>
  {<Link className='suittag' to={"/Lawn"}><figure><img className='topsuitslist' src="unstitched___lawn (1).avif" alt="" /><figcaption className='tagm'>Lawn</figcaption></figure></Link>}

 

  </div>


<div className='suitcarts1'>
  {<Link className='suittag' to={"/yuma"}> <figure> <img className='topsuitslist' src="wn___styled_by_yumna_2.avif" alt="" /><figcaption>Styled By <br /> Yumna Zaidi</figcaption></figure></Link>}
 
 
  
  </div>


<div className='suitcarts1'>
  {<Link className='suittag' to={"/TwoPieceSuit"}>  <figure> <img className='topsuitslist' src="US2_89c90254-8632-4560-9fcb-49c54a9a1199.avif" alt="" /><figcaption className='tagm'></figcaption>2 Piece</figure></Link>}
 
 
 
  </div>


<div className='suitcarts1'>
  {<Link className='suittag' to={"/SuitThreePiece"}>  <figure> <img className='topsuitslist' src="unstitched___3_piece_2.avif" alt="" /><figcaption className='tagm'>3 Piece</figcaption></figure></Link>}
 
 
 
 
  </div>



  </div>
  <h3 className='trending'>SHOP BY CATEGORY</h3>
  <hr className="Thr" />

<div className='maindivcard'>
  <div className='carddiv'>
    {<Link className='cardtext' to={""}> <img className='shopimg' src="imag.4.webp" alt="img" /><p className='cardtext1' > UNSTITCHED</p>
 </Link>}
   
</div>
<div className='carddiv'>
{<Link className='cardtext' to={""}><img className='shopimg' src="men.img.webp" alt="img" />
<p className='cardtext1'>MAN</p></Link>}

</div>
<div className='carddiv'>
{<Link className='cardtext' to={""}><img className='shopimg' src="ready.img.webp" alt="img" />
<p className='cardtext1'>READY TO WEAR</p></Link>}

</div>
<div className='carddiv'>
{<Link className='cardtext' to={""}><img className='shopimg' src="west.jpg" alt="img" />
<p className='cardtext1'>WEST</p></Link>}

</div>
</div>
<h3 className='trending2'>TRENDING</h3>
  <hr className="Thr2" />

  <div className='maindivcard2'>
  <div className='carddiv2'>
    {<Link className='cardtext2' to={""}> <img className='shopimg2' src="imag.1.webp" alt="img" /><p className='cardtext3' > Style By Yumna <br /> Zaidi(Lawn)</p>
 </Link>}
 <button onClick={bagAlert} className='addcardbutton'>Add to Bag</button>
 <p className='cardprice'> <strike>8000</strike> RS.3990.00</p>
 <div className='priceoffdiv'>
  <h4 className='priceoff'>50% <br /> OFF</h4>
</div>
</div>
<div className='carddiv2'>
{<Link className='cardtext2' to={""}><img className='shopimg2' src="imag.2.webp" alt="img" />
<p className='cardtext3'> Style By Yumna <br /> Zaidi(Lawn)</p></Link>}
<button onClick={bagAlert} className='addcardbutton'>Add to Bag</button><p className='cardprice'> <strike>8000</strike>RS.3990.00</p>
<div className='priceoffdiv'>
  <h4 className='priceoff'>50% <br /> OFF</h4>
</div>
</div>
<div className='carddiv2'>
{<Link className='cardtext2' to={""}><img className='shopimg2' src="imag.9.webp" alt="img" />
<p className='cardtext3'> Style By Yumna <br /> Zaidi(Lawn)</p></Link>}
<button className='addcardbutton'>Add to Bag</button><p className='cardprice'> <strike>8000</strike>RS.3990.00</p>
<div className='priceoffdiv'>
  <h4 className='priceoff'>50% <br /> OFF</h4>
</div>
</div>
<div className='carddiv2'>
{<Link className='cardtext2' to={""}><img className='shopimg2' src="imag.10.webp" alt="img" />
<p className='cardtext3'> Style By Yumna <br /> Zaidi(Lawn)</p></Link>}
<button className='addcardbutton'>Add to Bag</button><p className='cardprice'> <strike>8000</strike>RS.3990.00</p>
<div className='priceoffdiv'>
  <h4 className='priceoff'>50% <br /> OFF</h4>
</div>
</div>
<div className='carddiv2'>
{<Link className='cardtext2' to={""}><img className='shopimg2' src="imag.5.webp" alt="img" />
<p className='cardtext3'> Style By Yumna <br /> Zaidi(Lawn)</p></Link>}
<button className='addcardbutton'>Add to Bag</button><p className='cardprice'> <strike>8000</strike>RS.3990.00</p>
<div className='priceoffdiv'>
  <h4 className='priceoff'>50% <br /> OFF</h4>
</div>
</div>
<div className='carddiv2'>
{<Link className='cardtext2' to={""}><img className='shopimg2' src="imag.6.webp" alt="img" />
<p className='cardtext3'> Style By Yumna <br /> Zaidi(Lawn)</p></Link>}
<button className='addcardbutton'>Add to Bag</button><p className='cardprice'> <strike>8000</strike>RS.3990.00</p>
<div className='priceoffdiv'>
  <h4 className='priceoff'>50% <br /> OFF</h4>
</div>
</div>
<div className='carddiv2'>
{<Link className='cardtext2' to={""}><img className='shopimg2' src="imag.7.webp" alt="img" />
<p className='cardtext3'> Style By Yumna <br /> Zaidi(Lawn)</p></Link>}
<button className='addcardbutton'>Add to Bag</button> <p className='cardprice'> <strike>8000</strike>RS.3990.00</p>

<div className='priceoffdiv'>
  <h4 className='priceoff'>50% <br /> OFF</h4>
</div>

</div>
<div className='carddiv2'>
{<Link className='cardtext2' to={""}><img className='shopimg2' src="imag.8.webp" alt="img" />
<p className='cardtext3'> Style By Yumna <br /> Zaidi(Lawn)</p></Link>}
<button className='addcardbutton'>Add to Bag</button><p className='cardprice'> <strike>8000</strike>  Rs.3990.00</p>

<div className='priceoffdiv'>
  <h4 className='priceoff'>50% <br /> OFF</h4>
</div>


</div>
</div>

  </>
  )

}
