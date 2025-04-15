import { PokemonListView } from "./PokemonListView";

export const Favorites = (props) => {
    return (
        <PokemonListView
            {...props}
            headingText="お気に入り"
        />
    )
};