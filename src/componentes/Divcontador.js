import React from "react";
import '../hojas-de-estilo/Divcontador.css';

function Divcontador({numero}) {
    
    return (
        <div className="contador">{numero}</div>
    )
}

export default Divcontador;