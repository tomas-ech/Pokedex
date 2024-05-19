import { IconWorldSearch } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonList from "./PokemonList"

export const Pokemon = () => {

  const [allPokemon, setallPokemon] = useState([])

  // //     //efecto con arreglo vacio que se renderiza luego del primer render
       useEffect( () => {
           axios.get("https://pokeapi.co/api/v2/pokemon?limit=151"). //el ?limit=150 es para la paginación, por defecto esta paginado a 20 elementos, aquí rompemos eso para pedir 150 de golpe
           then(( {data} ) => setallPokemon(data.results)).
           catch((err) => console.log(err));
          }, [])

          
  //         //  //Usar {} debtro del parentesis de then desestructuraliza el objeto y saca la variable con el nombre dado, en este caso se evita poner la versión larga then(( obj ) => console.log(obj.data)).

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex items-center rounded-2xl text-lg">
          <input
            className="outline-none flex-1"
            type="text"
            placeholder="Search your Pokemon"
          />
          <button className="bg-blue-700 p-2 rounded-xl shadow-lg shadow-blue-500/50 hover:bg-blue-600 transition-colors">
            <IconWorldSearch color="white" stroke={2} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={allPokemon} />
    </section>
  )
}
