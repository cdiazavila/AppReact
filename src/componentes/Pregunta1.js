import React, { Fragment } from 'react';

function Pregunta1(props){
     
    const leerPregunta1 =(e)=>{
        console.log(e.target.value);
        if(e.target.value==='1'){
            props.guardarRespuesta1(0.5);
            props.guardarcolor1('bg-success');
            props.guardarmensaje1('Punto 0.5 de 0.5');
           
        }else{
            props.guardarRespuesta1(0);
            props.guardarcolor1('bg-danger');
            props.guardarmensaje1('Punto 0 de 0.5');
          
        }
      
    }

    let  clase1 =`p-3 mb-2 parrafo ${props.color1}`;
    return(
        <Fragment>
         <div  id="preguntaglobal" className={props.mostrarocultar} > 

               <p className={clase1}> 1- Para que sirve la Etiqueta P ?</p> <br/>
                <form action="">
                    <input type="radio" name="p1" id="opcion1" value="1" onChange={ leerPregunta1 }/> <label for="1" className={props.clasesLabel}>Para Guardar parafos</label><br/><br/>
                    <input type="radio" name="p1" id="opcion2" value="2" onChange={ leerPregunta1 }/> <label for="2" id="label">Para Formularios</label><br/><br/>
                    <input type="radio" name="p1" id="opcion3" value="3" onChange={ leerPregunta1 }/> <label for="3">Input</label>
                </form>
                <div id="resultado1">{props.mensaje1}</div>
         </div>

         </ Fragment>
    )
}

export default Pregunta1;

