import React, { Fragment } from 'react';

function Pregunta1({mostrarocultar}){
    return(
        <Fragment>
         <div  id="preguntaglobal" className={mostrarocultar} > 

               <p> 1- Para que sirve la Etiqueta P ?</p> <br/>
                <form action="">
                    <input type="radio" name="p1" id="opcion1" value="1"/> <label for="1">Para Guardar parafos</label><br/><br/>
                    <input type="radio" name="p1" id="opcion2" value="2"/> <label for="2" id="label">Para Formularios</label><br/><br/>
                    <input type="radio" name="p1" id="opcion3" value="3"/> <label for="3">Input</label>
                </form>
                <div id="resultado1"></div>
         </div>

         </ Fragment>
    )
}

export default Pregunta1;

