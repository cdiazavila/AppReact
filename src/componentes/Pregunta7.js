import {React,Fragment} from 'react'


function Pregunta7(props){
    const leerPregunta7 =(e)=>{
    
        if(e.target.value==='3'){
            props.guardarRespuesta7(0.5);
            props.guardarcolor7('bg-success');
            props.guardarmensaje7('Punto 0.5 de 0.5');
           
        }else{
            props.guardarRespuesta7(0);
            props.guardarcolor7('bg-danger');
            props.guardarmensaje7('Punto 0 de 0.5');
          
        }
      
    }

    let  clase1 =`p-3 mb-2 parrafo ${props.color7}`;
    let clase2=`${props.clasesLabel}`;
    return(
        <Fragment>
        <div  id="preguntaglobal" className={props.mostrarocultar} > 

            <p className={clase1}>7- En JavaScript  el document.getElementById() sirve para llamar ?</p> <br/>
            <form action="#">
               <input type="radio" name="p7" id="opcion1" value="1"  onChange={ leerPregunta7 }/> <label for="1">Una Clase</label> <br/><br/>
               <input type="radio" name="p7" id="opcion2" value="2"  onChange={ leerPregunta7 }/> <label for="2" id="label" >Una Funcion</label><br/><br/>
               <input type="radio" name="p7" id="opcion3" value="3"  onChange={ leerPregunta7 }/> <label for="3" className={clase2} >Un Id</label>
              </form>
        
       
         <div id="resultado3">{props.mensaje7}</div>
        </div>

        </ Fragment>

    )
}

export default Pregunta7;