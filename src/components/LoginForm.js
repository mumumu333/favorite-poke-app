import { Box, Input, Button, Heading, VStack, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ userId, setUserId, passWord, setPassWord }) => {
  const navigate = useNavigate();
  const toast = useToast();

  // ログインボタンクリック時の動き
  const onClickLogin = () => {
    if (userId === "1" && passWord === "1") {
      toast({
        title: "ログインしました",
        status: "info",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      navigate("/home");
      setUserId("");
      setPassWord("")
    } else {
      toast({
        title: "IDもしくはパスワードが違います。",
        description: "※どちらにも半角英数の1を入れるとログインできます",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={20} p={8} bg="white" boxShadow="md" borderRadius="md">
      <Heading fontSize="midiumtitle" mb={6} textAlign="center">
        ログイン
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>ユーザーID</FormLabel>
          <Input value={userId} onChange={(e) => setUserId(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input
            type="password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          isDisabled={!userId || !passWord}
          onClick={onClickLogin}
          w="100%"
        >
          ログイン
        </Button>
      </VStack>
    </Box>
  );
};
