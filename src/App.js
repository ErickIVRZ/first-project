//Importacion de documentos,componente y creacion de un estado(useState)

import React,{useState} from 'react';
import Json from './QuoteBox/Quotes.json'
import Quotebox from './QuoteBox/quotebox';
import Changebutton from './QuoteBox/Changebutton';
import './App.css';

//En este bloque de codigo se declara una variable que se usara como indice con math.floor y math.random podemos definir un rango de numeros de forma aleatoria.

function App() {
  let index = Math.floor(Math.random()*102);
const [quote, setQuote] = useState(Json.quotes[index]);


//En este bloque de codigo modificamos el indice

function Change(){
  index = Math.floor(Math.random()*102);
  setQuote(Json.quotes[index]);
 
}

//en la linea 27 estoy llamndo a mi componente y asignandole una valor a mi prop
//en la linea 28 estoy llamndo a mi componente button y asignandole una valor a mi prop
  return (
  
    <div className='App'>
    
      <Quotebox quote={quote} />
      <Changebutton change={Change}/>
        
    </div>
  );
}

export default App;
