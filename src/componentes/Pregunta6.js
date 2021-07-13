import {React,Fragment} from 'react'


function Pregunta6(props){
    const leerPregunta6 =(e)=>{
    
        if(e.target.value==='3'){
            props.guardarRespuesta6(0.5);
            props.guardarcolor6('bg-success');
            props.guardarmensaje6('Punto 0.5 de 0.5');
           
        }else{
            props.guardarRespuesta6(0);
            props.guardarcolor6('bg-danger');
            props.guardarmensaje6('Punto 0 de 0.5');
          
        }
      
    }

    let  clase1 =`p-3 mb-2 parrafo ${props.color6}`;
    let clase2=`${props.clasesLabel}`;
    return(
        <Fragment>
        <div  id="preguntaglobal" className={props.mostrarocultar} > 

            <p className={clase1}>6- En CSS el comando que sirve para ponerle un color al fondo es ?</p> <br/>
            <form action="#">
               <input type="radio" name="p6" id="opcion1" value="1"  onChange={ leerPregunta6 }/> <label for="1" >color</label> <br/><br/>
               <input type="radio" name="p6" id="opcion2" value="2"  onChange={ leerPregunta6 }/> <label for="2" id="label" >margin-left</label><br/><br/>
               <input type="radio" name="p6" id="opcion3" value="3"  onChange={ leerPregunta6 }/> <label for="3" className={clase2} >background-color</label>
              </form>
        
       
         <div id="resultado3">{props.mensaje6}</div>
        </div>

        </ Fragment>

    )
}

export default Pregunta6;