import { Button, Stack, useToast } from '@chakra-ui/react';

export const ActionButtons = () => {
  const toast = useToast();

  const handleWelcomeClick = () => {
    toast({
      title: 'Bem-vindo(a)!',
      description: "Login efetuado com sucesso.",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right'
    });
  };

  return (
    <Stack direction="row" spacing={4} justify="center" my="8">
      <Button
        colorScheme="purple"
        variant="solid"
        onClick={handleWelcomeClick}
      >
        Clique para o Toast
      </Button>
    </Stack>
  );
};