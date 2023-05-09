import 'bootstrap/dist/css/bootstrap.min.css'
import Jugadores from './Jugadores';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Jugadores image="messi"
        name="Lionel Andrés Messi Cuccittini "
        description="conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional con la selección de Argentina, equipo del que es capitán."
      />

<Jugadores image="cristiano"
        name="Cristiano Ronaldo dos Santos Aveiro "
        description="conocido como Cristiano Ronaldo, es un futbolista portugués. Juega como extremo izquierdo o delantero y su equipo actual es el Al-Nassr F. C. de la Liga Profesional Saudí.18​Es internacional absoluto con la selección de Portugal, de la cual es capitán y máximo goleador histórico."
      />

<Jugadores image="pele"
        name="Edson Arantes do Nascimento"
        description="​ más conocido como Pelé, fue un futbolista brasileño que jugó como delantero. Apodado O Rei, está reconocido por muchos especialistas, exfutbolistas y aficionados como uno de los mejores futbolistas y deportistas de todos los tiempos,n. 1​8​9​10​11​12​13​ siendo descrito por la FIFA como «el más grande de todos».14​ En 1999 la Revista Olympic, órgano oficial del Movimiento Olímpico, lo distinguió como uno de los cinco «mejores atletas del siglo xx», siendo el único futbolista en alcanzar dicho reconocimiento."
      />

      </div>
    </div>
  );
}

export default App;
