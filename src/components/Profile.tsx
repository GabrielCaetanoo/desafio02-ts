import { Flex, Avatar, Box, Heading, Text } from '@chakra-ui/react';

export const Profile = () => {
  return (
    // Usamos a notação de array para a propriedade 'direction'
    // 'column' em telas pequenas (base), 'row' em telas médias (md) e maiores
    <Flex
      direction={['column', 'column', 'row']}
      align="center"
      my="10"
      w="100%"
      maxW="800px"
    >
      <Avatar
        size="2xl"
        name="Seu Nome"
        src="https://media.istockphoto.com/id/1495088043/pt/vetorial/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=S7d8ImMSfoLBMCaEJOffTVua003OAl2xUnzOsuKIwek="
        // Adiciona uma margem inferior em telas pequenas e direita em telas maiores
        mb={[4, 4, 0]}
        mr={[0, 0, 6]}
      />
      {/* Alinha o texto à esquerda em telas maiores */}
      <Box textAlign={['center', 'center', 'left']}>
        <Heading as="h1" size="xl">
          Gabriel Caetano
        </Heading>
        <Text mt="2" color="gray.600">
          Desenvolvedor(a) Full Stack | Apaixonado(a) por TypeScript e React.
          Sempre buscando novos desafios e aprendizados.
        </Text>
      </Box>
    </Flex>
  );
};