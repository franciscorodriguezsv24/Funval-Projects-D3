import '../estilos/Image.css'

function Image(props){
    return(
        <div>
        <img  className="poke-img" src={require(`../poke-image/pokemon-${props.imagen}.jpg`)} alt="pokemon-card"/>
        </div>
    );
}

export default Image;