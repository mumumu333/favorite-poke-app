import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Text,
    Image,
    Box,
    Flex,
    Grid,
    GridItem
} from "@chakra-ui/react";
import { FavoriteHeartButton } from "./FavoriteHeartButton";
import { Fragment } from 'react';
import { MemoInput } from "./MemoInput";

export const PokemonModal = ({
    isOpen,
    onClose,
    data,
    index,
    isFavorite,
    setFavorites,
    memos,
    handleMemoChange,
}) => {
    if (!data) return null;

    // 取得した値を表で表示
    const infoItems = [
        { label: "分類", value: data.genus },
        { label: "身長", value: `${data.height}cm` },
        { label: "体重", value: `${data.weight}kg` },
        { label: "わざ", value: data.skill },
        { label: "わざの説明", value: data.skilldetail },
        { label: "わざの威力", value: data.power },
        { label: "わざのpp", value: data.pp },
        { label: "命中率", value: data.accuracy },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent w="80%" maxW="500px">
                <ModalBody mt="30px" mb="30px">
                    <ModalCloseButton />
                    <Box mt="30px">
                        <Box w="96px" m="auto">
                            <Image src={data.image} alt={data.name} w="100%" />
                        </Box>
                    </Box>
                    <Flex mt="30px" justifyContent="space-between" alignItems="center">
                        <Text fontWeight="bold" fontSize="midiumtitle">{data.name}</Text >
                        <FavoriteHeartButton
                            isFavorite={isFavorite}
                            setFavorites={setFavorites}
                            index={index}
                        />
                    </Flex>
                    {/* ポケモンのデータ表 */}
                    <Grid templateColumns="auto 1fr"
                        border="1px solid"
                        borderColor="border.default"
                        borderRadius="md"
                        overflow="hidden"
                        mt="4"
                    >
                        {infoItems.map((item, index) => (
                            <Fragment key={item.label}>
                                <GridItem
                                    fontWeight="bold"
                                    px="4"
                                    py="2"
                                    borderBottom={index === infoItems.length - 1 ? "none" : "1px solid"}
                                    borderRight="1px solid"
                                    borderColor="border.default">
                                    {item.label}
                                </GridItem>
                                <GridItem
                                    px="4"
                                    py="2"
                                    borderBottom={index === infoItems.length - 1 ? "none" : "1px solid"}
                                    borderColor="border.default"
                                >
                                    {item.value}
                                </GridItem>
                            </Fragment>
                        ))}
                    </Grid>
                    {/* テキストエリア */}
                    <MemoInput
                        value={memos[index] || ""}
                        onChange={(value) => handleMemoChange(index, value)}
                    />
                </ModalBody>
            </ModalContent>
        </Modal >
    );
};
