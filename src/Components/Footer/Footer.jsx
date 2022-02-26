import React from "react"

export default function Footer (){
    return(
        <>
        <footer id="footer">
            <ul className="ulFooter">
             <li>
                <img style={{minHeight:"0.4em", maxHeight:"1.5em"}} src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" alt="instagram" />
                <p style={{color:"black"}}> @AzulAzulSiempre </p>
             </li>
             <li>
                <img style={{minHeight:"0.4em", maxHeight:"1.5em"}}  src="https://cdn-icons-png.flaticon.com/512/1384/1384021.png" alt="facebook" />
                <p style={{color:"black"}}> Azul Azul</p>
             </li>
             <li>
                <img style={{minHeight:"0.4em", maxHeight:"1.5em"}}  src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" alt="whatsapp" />
                <p style={{color:"black"}}> +54 9 236-4123456 </p>
             </li>
        </ul>
        </footer>
        
        
        
        </>
    )
}