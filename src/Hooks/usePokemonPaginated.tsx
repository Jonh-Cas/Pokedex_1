import { useEffect, useRef } from "react";
import { pokemonApi } from '../Api/pokemonApi';


const usePokemonPaginated = () => {
    
    
    const nextPageURL = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')
 
    const loadPokemons = async () => {

        const resp = await pokemonApi.get(nextPageURL.current);
        console.log(resp.data);

    }
    
    useEffect(() => {
        loadPokemons();
    }, [])

    return {
        
    }
}

export default usePokemonPaginated;
