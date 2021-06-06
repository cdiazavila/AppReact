import React, { Fragment } from 'react';

function Pregunta2({mostrarocultar}){
    return(
        <Fragment>
         <div  id="preguntaglobal" className={mostrarocultar}> 
            <p> 2- Un input de Type = Date sirve para  ?</p> <br/>
         <form action="#">
             <input type="radio" name="p2" id="opcion1" value="1"/> <label for="1">Numeros</label><br/><br/>
             <input type="radio" name="p2" id="opcion2" value="2"/> <label for="2" id="label">Fechas</label><br/><br/>
             <input type="radio" name="p2" id="opcion3" value="3"/> <label for="3">caracteres</label>
        </form>
         
          <div id="resultado2"></div>
             
         </div>
         </ Fragment>
    )
}

export default Pregunta2;
