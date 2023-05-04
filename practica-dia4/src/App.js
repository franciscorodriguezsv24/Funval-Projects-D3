
import Empleados from './componentes/Empleados'
import './App.css';

function App(){
  return(
    <div style={{display:'flex'}}>
      <Empleados
        name="Ana"
        position="CEO"
        id="256589-6"
        email="anaDelCarmen@outlook.es"
        image="ana"
      />

      <Empleados
        name="Eva"
        position="CTO"
        id="556986-8"
        email="Evangelin2566@gmail.com"
        image="eva"
      />

      <Empleados
        name="Pep"
        position="Becario"
        id="968545-7"
        email="PepIgnacio2003@gmail.com"
        image="pep"
      />
    </div>
  );
}

 export default App 