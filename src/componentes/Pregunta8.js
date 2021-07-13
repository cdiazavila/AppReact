import {React,Fragment} from 'react'


function Pregunta8(props){
    const leerPregunta8 =(e)=>{
    
        if(e.target.value==='1'){
            props.guardarRespuesta8(0.5);
            props.guardarcolor8('bg-success');
            props.guardarmensaje8('Punto 0.5 de 0.5');
           
        }else{
            props.guardarRespuesta8(0);
            props.guardarcolor8('bg-danger');
            props.guardarmensaje8('Punto 0 de 0.5');
          
        }
      
    }

    let  clase1 =`p-3 mb-2 parrafo ${props.color8}`;
    let clase2=`${props.clasesLabel}`;
    return(
        <Fragment>
        <div  id="preguntaglobal" className={props.mostrarocultar} > 

            <p className={clase1}>8- En JavaScript  el document.getSellector() sirve para llamar ?</p> <br/>
            <form action="#">
               <input type="radio" name="p8" id="opcion1" value="1"  onChange={ leerPregunta8 }/> <label for="1" className={clase2} >Una Clase</label> <br/><br/>
               <input type="radio" name="p8" id="opcion2" value="2"  onChange={ leerPregunta8 }/> <label for="2" id="label" >Una Funcion</label><br/><br/>
               <input type="radio" name="p8" id="opcion3" value="3"  onChange={ leerPregunta8 }/> <label for="3" >Un Id</label>
              </form>
        
       
         <div id="resultado3">{props.mensaje8}</div>
        </div>

        </ Fragment>

    )
}

export default Pregunta8;