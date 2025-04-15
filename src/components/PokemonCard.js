import { Box, Button, Flex, Image, Text, VStack, Icon } from "@chakra-ui/react";
import { FavoriteHeartButton } from "./FavoriteHeartButton";

export const PokemonCard = ({ data, index, isFavorite, setFavorites, onClickCard }) => {
    return (
        <Flex flexWrap="wrap" cursor="pointer" p="10px" bg="white" borderRadius="md" boxShadow="md" aspectRatio={1} onClick={onClickCard} >
            <Flex w="100%" justifyContent="space-between" alignItems="center" height="fit-content">
                <Text fontWeight="bold" fontSize="lg">{data.name}</Text >
                <FavoriteHeartButton
                    isFavorite={isFavorite}
                    setFavorites={setFavorites}
                    index={index}
                />
            </Flex>
            <Box mr="auto" ml="auto" w="96px">
                <Image src={data.image} alt={data.name} w="100%" />
            </Box>
        </Flex>
    )
}
