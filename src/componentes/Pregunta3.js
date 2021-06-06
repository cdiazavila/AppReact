import React, { Fragment } from 'react';

function Pregunta3({mostrarocultar}){
    return(
        <Fragment>
         <div  id="preguntaglobal" className={mostrarocultar} > 

             <p>3- Un input de Type = text sirve para  ?</p> <br/>
             <form action="#">
                <input type="radio" name="p3" id="opcion1" value="1"/> <label for="1">Fechas</label><br/><br/>
                <input type="radio" name="p3" id="opcion2" value="2"/> <label for="2" id="label">Taxtos</label><br/><br/>
                <input type="radio" name="p3" id="opcion3" value="3"/> <label for="3">Numeros</label>
               </form>
         
        
          <div id="resultado3"></div>
         </div>

         </ Fragment>
    )
}

export default Pregunta3;
