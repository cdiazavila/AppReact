import React, { Fragment } from 'react';

function Pregunta2(props){
    const leerPregunta2 =(e)=>{
        console.log(e.target.value);
        if(e.target.value==='2'){
            props.guardarRespuesta2(0.5);
            props.guardarcolor2('bg-success');
            props.guardarmensaje2('Punto 0.5 de 0.5');
        }else{
            props.guardarRespuesta2(0);
            props.guardarcolor2('bg-danger');
            props.guardarmensaje2('Punto 0 de 0.5');
        }
      
    }

    let  clase2 =`p-3 mb-2 parrafo ${props.color2}`;
    return(
        <Fragment>
         <div  id="preguntaglobal" className={props.mostrarocultar}> 
            <p className={clase2}> 2- Un input de Type = Date sirve para  ?</p> <br/>
         <form action="#">
             <input type="radio" name="p2" id="opcion1" value="1" onChange={ leerPregunta2 }/> <label for="1">Numeros</label><br/><br/>
             <input type="radio" name="p2" id="opcion2" value="2" onChange={ leerPregunta2 }/> <label for="2" id="label" className={props.clasesLabel}>Fechas</label><br/><br/>
             <input type="radio" name="p2" id="opcion3" value="3" onChange={ leerPregunta2 }/> <label for="3">caracteres</label>
        </form>
         
          <div id="resultado2">{props.mensaje2}</div>
             
         </div>
         </ Fragment>
    )
}

export default Pregunta2;
