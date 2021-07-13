import React from 'react'

function Panel({guardarContador,ocultarPanel}){

    const primera =()=>{
        guardarContador(1);
      }

      const segunda =()=>{
        guardarContador(2);
      }

      const tercera =()=>{
        guardarContador(3);
      }
      const cuarta =()=>{
        guardarContador(4);
      }
      const quinta =()=>{
        guardarContador(5);
      }

      const sexta =()=>{
        guardarContador(6);
      }
      const septima =()=>{
        guardarContador(7);
      }

      const octava =()=>{
        guardarContador(8);
      }
      const novena =()=>{
        guardarContador(9);
      }

      const decimo =()=>{
        guardarContador(10);
      }

    return(
        <div id="panel" className={ocultarPanel}>
        <form action="#">
          <button type="submit" onClick={primera}  id="bt1" >1</button>  
          <button type="submit" onClick={segunda}  id="bt2">2</button>
          <button type="submit" onClick={tercera}  id="bt3">3</button>  
          <button type="submit" onClick={cuarta}   id="bt4">4</button>
          <button type="submit" onClick={quinta}   id="bt5" >5</button>  
          <button type="submit" onClick={sexta}    id="bt6">6</button>
          <button type="submit" onClick={septima}  id="bt7">7</button>  
          <button type="submit" onClick={octava}   id="bt8">8</button>
          <button type="submit" onClick={novena}   id="bt9">9</button>  
          <button type="submit" onClick={decimo}   id="bt10">10</button>
        
        </form>
      </div>

    )
}

export default Panel;
