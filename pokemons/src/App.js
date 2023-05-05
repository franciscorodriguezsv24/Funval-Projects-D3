import Image from './componentes/Image';
import Info from './componentes/Info';
import './App.css';
import Icono from './componentes/Icono';
function App() {
  return (
    <div className="App">
      <div className="card">
       <Icono icono="electrico" />
        <div>
          <Image imagen="pikachu" />
        </div>
        <Info
          nombre="Pikachu"
          descripcion="Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon más conocido de la historia, mayormente por ser el acompañante del protagonista del anime, Ash Ketchum y la mascota representante de la franquicia Pokémon. Es el Pokémon inicial que usan los entrenadores que empiezan su aventura en la región de Kanto en Pokémon Amarillo y Pokémon: Let's Go, Pikachu!. A partir de la segunda generación es la evolución de Pichu."
          evolucion="Raichu exponiéndolo a una piedra trueno fuera de Alola, incluyendo el ultraespacio. Raichu no evoluciona. Raichu de Alola exponiéndolo a una piedra trueno en Alola. Raichu de Alola no evoluciona." />
      </div>

      <div className="card">
       <Icono icono="veneno" />
        <div>
        
          <Image imagen="gengar" />
        </div>
        <Info
          nombre="Gengar"
          descripcion="Gengar es un Pokémon de tipo fantasma/veneno introducido en la primera generación. Es la evolución de Haunter."
          evolucion="Gastly evoluciona a Haunter al nivel 25. Haunter evoluciona a Gengar intercambiándolo con otro entrenador o exponiéndolo a un cordón unión en Leyendas Pokémon: Arceus. Gengar no evoluciona." />
      </div>

      <div className="card">
       <Icono icono="agua" />
        <div>
          
          <Image imagen="croconaw" />
        </div>
        <Info
          nombre="Croconaw"
          descripcion="Croconaw es un Pokémon de tipo agua introducido en la segunda generación. Es la evolución de Totodile, uno de los Pokémon iniciales de Johto."
          evolucion="Totodile evoluciona a Croconaw en el nivel 18. Croconaw evoluciona a Feraligatr en el nivel 30." />
      </div>

      <div className="card">
       <Icono icono="agua" />
        <div>
         
          <Image imagen="squirtle" />
        </div>
        <Info
          nombre="Squirtle"
          descripcion="Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es uno de los Pokémon iniciales en la región Kanto, junto a Bulbasaur y Charmander, en las ediciones Pokémon Rojo, Pokémon Verde y Pokémon Azul y Pokémon Rojo Fuego y Pokémon Verde Hoja."
          evolucion="Squirtle evoluciona a Wartortle en el nivel 16. Wartortle evoluciona a Blastoise al nivel 36." />
      </div>

      <div className="card">
       <Icono icono="lucha" />
        <div>
          <Image imagen="machoke" />
        </div>
        <Info
          nombre="Machoke"
          descripcion="Machoke es un Pokémon de tipo lucha introducido en la primera generación. Es la evolución de Machop."
          evolucion="Machop evoluciona a Machoke en el nivel 28. Machoke evoluciona a Machamp intercambiándolo " />
      </div>

      <div className="card">
       <Icono icono="agua" />
        <div>
          <Image imagen="wooper" />
        </div>
        <Info
          nombre="Wooper"
          descripcion="Wooper es un Pokémon de tipo agua/tierra introducido en la segunda generación."
          evolucion="Wooper evoluciona a Quagsire al nivel 20. Quagsire no evoluciona." />
      </div>
    </div>
  );
}

//props
// imagen
// nombre
// description
// Evolucion


export default App;
