import React from "react";
import '../hojas-de-estilo/Contador.css';

function Contador({texto,isAumentar,metodo}) {
    return (
        <button onClick={metodo} className={isAumentar? 'boton-aumentar': 'boton-reiniciar'}>{texto}</button>
    )
}

export default Contador;