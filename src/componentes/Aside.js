import React, {useState} from 'react';

 function Aside(props){

      //captura un mensaje de error 
      const [error, guardarError] = useState(false);
      
      const leerNombre=(e)=>{
       props.guardarNombre(e.target.value);
      }

      const leerApellido=(e)=>{
          props.guardarApellidos(e.target.value);
      }

      //cuando el usuario de click
      const enviarDatos=(e)=>{
        e.preventDefault()
        if(props.nombres==='' || props.apellidos===''){

            guardarError(true);
            setTimeout(() => {
                guardarError(false);
            }, 3000);
        }else{
            props.obtenerDatos(props.nombres,props.apellidos);
         
        }
      
      }
    return(
      <aside>
          <form id="formulario" onSubmit={ enviarDatos }>

               <label for="nombre">Nombres</label> 
               <input type="text" id="nombre" placeholder="Ingrese Nombres" onChange={ leerNombre }/> <br/>
               <label for="apellidos">Apellidos</label>
               <input type="text" id="apellido" placeholder="Ingrese Apellidos" onChange={ leerApellido }/> <br/>
               <button type="submit">INICIAR</button>
              
              { (error) ?  <p className="mensajeError">LLene Todo Los Campos</p>: '' }
              

       
               
              
          </form>
      </aside> 
      
       
    );  
 }
 export default Aside;