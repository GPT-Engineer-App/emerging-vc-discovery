import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const background = useColorModeValue("linear(to-br, orange.400, pink.600)", "linear(to-br, orange.200, pink.300)");

  return (
    <Box bgGradient={background} minH="100vh" py="12" px={{ base: "3", lg: "8" }}>
      <Container maxW="lg" textAlign="center">
        <VStack spacing="6">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1554774853-d50f9c681ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZW50dXJlJTIwY2FwaXRhbCUyMGxvZ298ZW58MHx8fHwxNzEwMDg4OTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Spawn VC logo" />
          <Heading as="h1" size="3xl" fontWeight="bold">
            Spawn VC
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.700", "gray.200")}>
            Find emerging venture managers before they're famous
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="pink" variant="solid" size="lg" mt="5">
            Get Started
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
