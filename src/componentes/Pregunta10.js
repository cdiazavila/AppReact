import {React,Fragment} from 'react'


function Pregunta10(props){
    const leerPregunta10=(e)=>{
    
        if(e.target.value==='3'){
            props.guardarRespuesta10(0.5);
            props.guardarcolor10('bg-success');
            props.guardarmensaje10('Punto 0.5 de 0.5');
           
        }else{
            props.guardarRespuesta10(0);
            props.guardarcolor10('bg-danger');
            props.guardarmensaje10('Punto 0 de 0.5');
          
        }
      
    }

    let  clase1 =`p-3 mb-2 parrafo ${props.color10}`;
    let clase2=`${props.clasesLabel}`;
    return(
        <Fragment>
        <div  id="preguntaglobal" className={props.mostrarocultar} > 

            <p className={clase1}>10- En JavaScript cual no es un ciclo?</p> <br/>
            <form action="#">
               <input type="radio" name="p10" id="opcion1" value="1"  onChange={ leerPregunta10 }/> <label for="1"  >Un For</label> <br/><br/>
               <input type="radio" name="p10" id="opcion2" value="2"  onChange={ leerPregunta10 }/> <label for="2" id="label" >Un ForEcht</label><br/><br/>
               <input type="radio" name="p10" id="opcion3" value="3"  onChange={ leerPregunta10 }/> <label for="3" className={clase2}>onClick</label>
              </form>
        
       
         <div id="resultado3">{props.mensaje10}</div>
        </div>

        </ Fragment>

    )
}

export default Pregunta10;