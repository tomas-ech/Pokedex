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
        <article className="capitalize text-center bg-white rounded-[30px] relative font-semibold pb-2 shadow-md shadow-slate-400">
            <header className="h-8">
                <img src={pokemon?.sprites.front_default} alt="" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0"/>
            </header>
            <span className="text-sm text-slate-400">N° {pokemon?.id}</span>
            <h2 className="text-lg">{pokemon?.name}</h2>
            <ul className="flex justify-center gap-2">
                {pokemon?.types.map(type => (
                <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
        </article>
    )
}

export default PokemonPreview