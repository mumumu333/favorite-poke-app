import { Box, Flex, Text } from "@chakra-ui/react";
import { FavoriteHeartButton } from "./FavoriteHeartButton";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//　一覧ページのカード設定
export const PokemonCard = ({ data, index, isFavorite, setFavorites, onClickCard }) => {
    return (
        <Flex flexWrap="wrap"
            cursor="pointer"
            p="10px"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            aspectRatio={1}
            onClick={onClickCard} >
            <Flex w="100%" justifyContent="space-between" alignItems="center" height="fit-content">
                <Text fontSize="smalltitle" fontWeight="bold">{data.name}</Text >
                <FavoriteHeartButton
                    isFavorite={isFavorite}
                    setFavorites={setFavorites}
                    index={index}
                />
            </Flex>
            <Box mr="auto" ml="auto" w="96px">
                <LazyLoadImage
                    src={data.image}
                    alt={data.name}
                    effect="blur"
                />
            </Box>
        </Flex>
    )
}
