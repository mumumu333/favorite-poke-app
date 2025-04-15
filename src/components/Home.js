import { PokemonListView } from "./PokemonListView";

export const Home = (props) => {
    return (
        <>
            <PokemonListView
                {...props}
                headingText="ポケモン一覧"
            />
        </>
    )
};