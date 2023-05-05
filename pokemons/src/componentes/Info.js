import '../estilos/Info.css'


export default function Info(props) {
    return (
        <div className="container-info">
            
            <p className="texto-nombre"><strong>Nombre: </strong>{props.nombre}
            </p>
            <p className="texto-info"><strong>Descripcion: </strong>{props.descripcion}
            </p>
            <p className="texto-info"><strong>Evolucion: </strong>{props.evolucion}
            </p>
        </div>
    );
}
