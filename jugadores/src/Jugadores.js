
export default function Jugadores(props){
    return (
        <div className="bg-primary d-flex flex-row px-3 py-4 justify-content-between mt-4 mb-4">
        <div className="w-25">
            <img className="w-100" src={require(`./img/jugador-${props.image}.jpeg`)} alt="jugador de fultbol"/>
        </div>
        <div className="w-50 bg-white text-start p-3">
        <p className="fs-5"><strong>{props.name}</strong> {props.description}</p>

        </div>
        </div>
    );

}