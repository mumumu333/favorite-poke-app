import { PokemonCard } from "./PokemonCard"
import { PokemonModal } from "./PokemonModal"
import { Heading, Box, useDisclosure, SimpleGrid } from "@chakra-ui/react";

// 一覧ページ全体のリスト設定
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
    const { isOpen, onOpen, onClose } = useDisclosure();

    // メモの変更時
    const handleMemoChange = (index, value) => {
        setMemos((prev) => ({ ...prev, [index]: value }))
    }

    // カードクリック時の動き
    const handleCardClick = (index) => {
        setSelectedPokemon(index);
        onOpen();
    };

    return (
        <Box maxWidth="1260px" w="90%" mr="auto" ml="auto" mb="100px">
            <Heading fontSize="largetitle" mt="70px" mb="30px">{headingText}</Heading>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacingY={4} spacingX={4}>
                {/* 一覧ページ */}
                {pageType !== "favoritepage" ?
                    pokemonData.map((data, index) =>
                        pokemonData[index] && (
                            <PokemonCard
                                key={data.name}
                                data={data}
                                index={index}
                                isFavorite={favorites.includes(index)}
                                setFavorites={setFavorites}
                                onClickCard={() => handleCardClick(index)}
                            />
                        )
                    )
                    // お気に入りページ
                    : favorites.map((index) =>
                        pokemonData[index] && (
                            <PokemonCard
                                key={pokemonData[index].name}
                                data={pokemonData[index]}
                                index={index}
                                isFavorite={true}
                                setFavorites={setFavorites}
                                onClickCard={() => handleCardClick(index)}
                            />
                        )
                    )}
            </SimpleGrid>
            {/* モーダル */}
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