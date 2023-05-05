import '../estilos/icono.css'

function Icono(props){
    return(
        <div className="icono">
           <div className="poke-icono">
           <img src={require(`../icono-tipo/tipo-${props.icono}.png`)} alt="tipo-card"/>
           </div>
        </div>
      
    );
}

export default Icono;