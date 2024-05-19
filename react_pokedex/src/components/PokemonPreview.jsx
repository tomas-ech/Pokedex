import axios from "axios";
import { useEffect, useState } from "react";

const PokemonPreview = ({ pokemonURL }) => {

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        axios.get(pokemonURL).
            then(({ data }) => setPokemon(data)).
            catch((err) => console.log(err));
    }, [])


    return (
        <article className="text-center bg-white rounded-[30px] border-2 border-black relative">
            <header className="h-8">
                <img src={pokemon?.sprites.front_default} alt="" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0"/>
            </header>
            <span>{pokemon?.id}</span>
            <h2 className="capitalize">{pokemon?.name}</h2>
            <ul>
                {pokemon?.types.map(type => (
                <li className="capitalize" key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
        </article>
    )
}

export default PokemonPreview