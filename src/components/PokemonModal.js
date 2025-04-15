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
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
} from "@chakra-ui/react";
import { FavoriteHeartButton } from "./FavoriteHeartButton";

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

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent w="80%" maxW="400px">
                <ModalBody mt="30px" mb="30px">
                    <ModalCloseButton />
                    <Box mt="30px">
                        <Box w="96px" m="auto">
                            <Image src={data.image} alt={data.name} w="100%" />
                        </Box>
                    </Box>
                    <Flex mt="30px" justifyContent="space-between" alignItems="center">
                        <Text fontWeight="bold" fontSize="lg">{data.name}</Text >
                        <FavoriteHeartButton
                            isFavorite={isFavorite}
                            setFavorites={setFavorites}
                            index={index}
                        />
                    </Flex>
                    <Stack gap="10">
                        {/* <Table variant="simple">
                            <Thead>
                                <Tr>分類:</Tr>
                                <Tr>身長:</Tr>
                                <Tr>体重:</Tr>
                                <Tr>わざ:</Tr>
                                <Tr>わざの説明:</Tr>
                                <Tr>わざの威力:</Tr>
                                <Tr>わざのpp:</Tr>
                                <Tr>命中率:</Tr>
                            </Thead>
                            <Tbody>

                                <Td>{data.genus}</Td>
                                <Tr>{data.height}cm</Tr>
                                <Tr>{data.weight}kg</Tr>
                                <Tr>{data.skill}</Tr>
                                <Tr>{data.skilldetail}</Tr>
                                <Tr>{data.power}</Tr>
                                <Tr>{data.pp}</Tr>
                                <Tr>{data.accuracy}</Tr>

                            </Tbody>
                        </Table> */}
                    </Stack>
                    {/* <VStack mt="20px" spacing={2} align="start" fontSize="sm">
                        <Flex><Box w="30%" fontWeight="bold">分類: </Box><Box w="65%">{data.genus}</Box></Flex>
                        <Flex><Box w="30%" fontWeight="bold">身長:</Box><Box w="65%">{data.height}cm</Box></Flex>
                        <Flex><Box w="30%" fontWeight="bold">体重: </Box><Box w="65%">{data.weight}kg</Box></Flex>
                        <Flex><Box w="30%" fontWeight="bold">わざ: </Box><Box w="65%">{data.skill}</Box></Flex>
                        <Flex><Box w="30%" fontWeight="bold">わざの説明: </Box><Box w="65%">{data.skilldetail}</Box></Flex>
                        <Flex><Box w="30%" fontWeight="bold">わざの威力: </Box><Box w="65%">{data.power}</Box></Flex>
                        <Flex><Box w="30%" fontWeight="bold">わざのpp: </Box><Box w="65%">{data.pp}</Box></Flex>
                        <Flex><Box w="30%" fontWeight="bold">命中率: </Box><Box w="65%">{data.accuracy}</Box></Flex>
                    </VStack> */}
                    <MemoInput
                        index={index}
                        value={memos[index] || ""}
                        onChange={(value) => handleMemoChange(index, value)}
                    />
                </ModalBody>
            </ModalContent>
        </Modal >
    );
};
