import React from 'react';

function Nav ({nombre,contarPreguntas}){
    return(
        <nav>
            <p className="parrafo-nav"> Bienvenodo/a {nombre}</p>
            <p >Pregunta {contarPreguntas} de 10</p>
            <hr/>
        </nav>
    )
}
export default Nav;