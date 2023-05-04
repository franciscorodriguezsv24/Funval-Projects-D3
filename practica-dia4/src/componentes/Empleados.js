import React from 'react';
import '../estilos/Empleados.css'

function Empleados(props){
    return(
        <div className="tarjeta">
        <h1>{props.name}</h1>
        <h2>{props.position}</h2>
        <p>id: {props.id}</p>
        <p>Correo: {props.email}</p>
        <img className='image' src={require(`../img/agent-${props.image}.jpeg`)} alt={props.name} width='200'/>
        </div>
    );
}



export default Empleados;

// () {
//     return (
//     <div style={{ display: 'flex' }}>
//     <Empleado nombre='Ana' cargo='CEO' id="256589-6" correo="anaDelCarmen@outlook.es" foto='/img/Ana.jpeg' />
//     <Empleado nombre='EVA' cargo='CTO' id="556986-8" correo="Evangelin2566@gmail.com" foto='/img/gato2.jpg' />
//     <Empleado nombre='Pep' cargo='Becario' correo="PepIgnacio2003@gmail.com" id="968545-7" foto='/' />
//     </div>
//     )}
  