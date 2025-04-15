import { PokemonCard } from "./PokemonCard"
import { PokemonModal } from "./PokemonModal"
import { Heading, Box, useDisclosure, SimpleGrid } from "@chakra-ui/react";

export const PokemonListView = ({
    pokemonData,
    favorites,
    setFavorites,
    memos,
    setMemos,
    setSelectedPokemon,
    selectedPokemon,
    headingText,
    pageType
}) => {
    const handleMemoChange = (index, value) => {
        setMemos((prev) => ({ ...prev, [index]: value }))
    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCardClick = (index) => {
        setSelectedPokemon(index);
        onOpen();
    };

    return (
        <Box maxWidth="1260px" w="90%" mr="auto" ml="auto" mb="100px">
            <Heading fontSize="30px" mt="70px" mb="30px">{headingText}</Heading>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacingY={4} spacingX={4}>
                {pageType !== "favoritepage" ?
                    pokemonData.map((data, index) =>
                        pokemonData[index] ? (
                            <PokemonCard
                                key={index}
                                data={data}
                                index={index}
                                isFavorite={favorites.includes(index)}
                                setFavorites={setFavorites}
                                onClickCard={() => handleCardClick(index)}
                            />
                        ) : null
                    )
                    : favorites.map((index) =>
                        pokemonData[index] ? (
                            <PokemonCard
                                key={index}
                                data={pokemonData[index]}
                                index={index}
                                isFavorite={true}
                                setFavorites={setFavorites}
                                onClickCard={() => handleCardClick(index)}
                            />
                        ) : null
                    )}
            </SimpleGrid>
            {selectedPokemon !== null && (
                <PokemonModal
                    isOpen={isOpen}
                    onClose={onClose}
                    data={pokemonData[selectedPokemon]}
                    index={selectedPokemon}
                    isFavorite={favorites.includes(selectedPokemon)}
                    setFavorites={setFavorites}
                    memos={memos}
                    handleMemoChange={handleMemoChange}
                />
            )}
        </Box>
    )
};