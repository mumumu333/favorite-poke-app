import {
    Box,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
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

    // ログアウトクリック時のトースト表示
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
            {/* ハンバーガーアイコン */}
            <Box textAlign="right" p="4">
                <IconButton
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    aria-label="Menu"
                    fontSize="largetitle"
                    bg="transparent"
                />
            </Box>
            {/* Drawer */}
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent fontSize="smalltitle" pl="10px">
                    <DrawerBody>
                        <VStack fontWeight="bold" mt="30px" align="start" spacing={5}>
                            <ChakraLink as={Link} to="/home" onClick={onClose}>
                                ポケモン一覧
                            </ChakraLink>
                            <ChakraLink as={Link} to="/favorites" onClick={onClose}>
                                お気に入り
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
