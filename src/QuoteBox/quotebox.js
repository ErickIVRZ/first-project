//De la linea 6 ala 13 estoy creando un contenedor padre e hijo este ultimo contendra las quotes
//creo una estiqueta h1 para mostrar la cita y una etiqueta h2 para mostrar el autor.A estas les asigno las props con el contenido antes mencionado.

const Quotebox=({quote})=>{
  return(
    
      <div className="container-flex">
        <div className="quote">
        <h1 className="text">
          {quote.quote}
        </h1>
        <h2 className="author">{quote.author}</h2>
       </div>
     </div>  
    
  )
}
export default Quotebox