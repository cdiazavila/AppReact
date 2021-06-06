import React, { Fragment, useState }  from 'react';
import Header from './componentes/Header';
import Aside from './componentes/Aside';
import Container from './componentes/Container';
import Footer from './componentes/footer';
import Nav from './componentes/Nav';

function App() {
  const [nombres, guardarNombre]  = useState('');
  const [apellidos, guardarApellidos]  = useState('');
  const [datos, guardarDatos]  = useState('');
  const [contarPreguntas, guardarcontarpreguntas] = useState(1);
  // funcion obtener datos 
 const obtenerDatos=(nombre,apellido)=>{
 const datos =nombre+' '+apellido;
  guardarDatos(datos);
}

//obtiene el numero de preguntas que van realizadas 
  const obtenercontador=(contador)=>{
    
     guardarcontarpreguntas(contador);
  }
let componente;
if(datos===''){
componente = <Aside obtenerDatos={obtenerDatos} nombres ={nombres} guardarNombre={guardarNombre}
apellidos ={apellidos} guardarApellidos={guardarApellidos} />
}else{
componente = <Container obtenercontador={obtenercontador} />
}
  return (
    <Fragment>
         <Header
          titulo="Test De Desarrollo Web"
          
          />
        
          <Nav nombre ={datos} contarPreguntas={contarPreguntas}/>
        
          {componente}
      
          
         <Footer  contenido="Universidad de Cordoba" />
    </Fragment>
   
    
  );
}

export default App;
