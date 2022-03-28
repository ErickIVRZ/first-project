//Creo un componente boton al cual le voy a importar el documento css que le dara estilos

import React from 'react';
import '../App.css'

//en la linea 8 estoy creando una constante la cual tendra una funcion de flecha con una prop. Esta prop sera una funcion.

//De la linea 14 ala 16 estoy creando mi componente boton el cual le asigno una clase para darle estilos y onclick para al momento de dar click al mismo este me ejecute la funcion que he pasado.

const Changebutton = ({change}) => {
  return (  
    
    
    <button className='my-button' onClick={change}>
       New Quote
    </button>
    
  );
};

export default Changebutton;