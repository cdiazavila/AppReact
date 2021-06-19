
import React, { Fragment } from 'react';

function Pregunta3(props){
   
    const leerPregunta3 =(e)=>{
        if(e.target.value==='2'){
            props.guardarRespuesta3(0.5);
            props.guardarcolor3('bg-success');
            props.guardarmensaje3('Punto 0.5 de 0.5');
        }else{
            props.guardarRespuesta3(0);
            props.guardarcolor3('bg-danger');
            props.guardarmensaje3('Punto 0 de 0.5');
        }
      
    }
  
    

    let  clase3 =`p-3 mb-2 parrafo ${props.color3}`;
   
     
    let clase2=`${props.clasesLabel}`;
    
    return(
        <Fragment>
         <div  id="preguntaglobal" className={props.mostrarocultar} > 

             <p className={clase3}>3- Un input de Type = text sirve para  ?</p> <br/>
             <form action="#">
                <input type="radio" name="p3" id="opcion1" value="1" onChange={ leerPregunta3 }/> <label for="1" >Fechas</label> <br/><br/>
                <input type="radio" name="p3" id="opcion2" value="2"  onChange={ leerPregunta3 }/> <label for="2" id="label" className={clase2}>Taxtos</label><br/><br/>
                <input type="radio" name="p3" id="opcion3" value="3" onChange={ leerPregunta3 }/> <label for="3">Numeros</label>
               </form>
         
        
          <div id="resultado3">{props.mensaje3}</div>
         </div>

         </ Fragment>
    )
}

export default Pregunta3;
