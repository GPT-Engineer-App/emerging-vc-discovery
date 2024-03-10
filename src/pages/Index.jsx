import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const background = useColorModeValue("linear(to-br, orange.400, pink.600)", "linear(to-br, orange.200, pink.300)");

  return (
    <Box bgGradient={background} minH="100vh" py="12" px={{ base: "3", lg: "8" }}>
      <Container maxW="lg" textAlign="center">
        <VStack spacing="6">
          <Heading as="h1" size="3xl" fontWeight="bold">
            Spawn VC
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.700", "gray.200")}>
            Find emerging venture managers before they're famous
          </Text>
          <Button colorScheme="pink" variant="solid" size="lg" mt="5">
            Fund Manager? Onboard Here
          </Button>
          <Button colorScheme="pink" variant="solid" size="lg" mt="5">
            Want Intros? Onboard Here
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
