//recibe los pokemon que se necesitan pintar y los pinta

import PokemonPreview from "./PokemonPreview"


const PokemonList = ({ pokemons }) => {
    return (
        //Para generar la grilla se pone grid, para darle columnas ponemos grid-cols y le dimos parametros personalizados, repeat para que las columnas se fueran generando, con la configuración de auto-fit para que llenen el espacioi disponible y con un minimo de 180px y un maximo de 1 fracción
        <section className="pd-4 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-y-14">
            {
                pokemons.map((pokemon) => (
                    <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url} />
                ))
            }
        </section>
    );
}

export default PokemonList