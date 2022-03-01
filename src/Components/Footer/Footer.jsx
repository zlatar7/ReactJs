import React from "react"

export default function Footer (){
    return(
        <>
        <footer id="footer">
            <ul className="ulFooter">
             <li>
                <img style={{minHeight:"0.4em", maxHeight:"1.5em"}} src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1646082996~hmac=a576c6c023b35ce0bbd27f518546ce44" alt="instagram" />
                <p className="parrafoFooter"> @AzulAzulSiempre </p>
             </li>
             <li>
                <img style={{minHeight:"0.4em", maxHeight:"1.5em"}}  src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1646082996~hmac=74bf09b1ed375b6ba6088725e7b9806c" alt="facebook" />
                <p className="parrafoFooter"> Azul Azul</p>
             </li>
             <li>
                <img style={{minHeight:"0.4em", maxHeight:"1.5em"}}  src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504957.png?token=exp=1646094205~hmac=8e99e3f6290ed174da1f8c05e1123c7e" alt="whatsapp" />
                <p className="parrafoFooter"> +54 9 236-4123456 </p>
             </li>
        </ul>
        </footer>
        
        
        
        </>
    )
}