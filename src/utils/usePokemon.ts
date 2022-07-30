import useSWR from "swr";
import { PokemonType } from "../types/PokemonType";

export const usePokemon = (id: number) => {
  const { data } = useSWR<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const species = useSWR<any>(data === undefined ? null : data.species.url);

  if (data === undefined || species.data === undefined) {
    return undefined;
  }

  const pokemon: PokemonType = {
    name: data.name,
    nameJa: species.data.names.find((v: any) => v.language.name === "ja").name,
    flavorText: species.data.flavor_text_entries.find(
      (v: any) => v.language.name === "ja"
    ).flavor_text,
    general: species.data.genera.find((v: any) => v.language.name === "ja")
      .genus,
    height: `${(data.height / 10).toFixed(1)}m`,
    weight: `${(data.weight / 10).toFixed(1)}kg`,
    img: {
      default: data.sprites.front_default,
      defaultBack: data.sprites.back_default,
      shiny: data.sprites.front_shiny,
      shinyBack: data.sprites.back_shiny,
      official: data.sprites.other["official-artwork"].front_default,
    },
    animate: {
      default:
        data.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
      defaultBack:
        data.sprites.versions["generation-v"]["black-white"].animated
          .back_default,
      shiny:
        data.sprites.versions["generation-v"]["black-white"].animated
          .front_shiny,
      shinyBack:
        data.sprites.versions["generation-v"]["black-white"].animated
          .back_shiny,
    },
  };

  return pokemon;
};
