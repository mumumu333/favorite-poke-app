import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    VStack,
    Link as ChakraLink,
    useToast
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const handleLogout = () => {
        toast({
            title: "ログアウトしました",
            status: "info",
            duration: 2000,
            position: "top",
            isClosable: true,
        });
    };

    return (
        <Box position="fixed" top="0" left="0" w="100%" zIndex="999">
            <Box textAlign="right" p="4">
                <IconButton
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    aria-label="Menu"
                    fontSize="30px"
                    color="gray.600"
                />
            </Box>

            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader >メニュー</DrawerHeader>
                    <DrawerBody>
                        <VStack align="start" spacing={4}>
                            <ChakraLink as={Link} to="/home" onClick={onClose}>
                                ポケモン一覧
                            </ChakraLink>
                            <ChakraLink as={Link} to="/favorites" onClick={onClose}>
                                お気に入り一覧
                            </ChakraLink>
                            <ChakraLink as={Link} to="/" onClick={() => { onClose(); handleLogout(); }}>
                                ログアウト
                            </ChakraLink>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
