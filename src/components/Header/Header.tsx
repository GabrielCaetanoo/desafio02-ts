import { Box, Flex, Heading, Button, Spacer } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex as="header" p="4" bg="gray.700" color="white" alignItems="center">
      <Box p="2">
        <Heading size="md">DIO Bank</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal">Login</Button>
      </Box>
    </Flex>
  );
};