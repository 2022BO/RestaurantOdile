import React from 'react';
import { Center, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";

export const RecipePage = ({ selectedRecipe, goBack }) => {
  // Check if selectedRecipe is undefined or null
  if (!selectedRecipe) {
    return (
      <Center>
        <VStack spacing={4} align="stretch">
          <Text>No recipe selected.</Text>
          <Button onClick={goBack}>Back to Recipes</Button>
        </VStack>
      </Center>
    );
  }

  const { recipe } = selectedRecipe;

  return (
    <Center>
      <VStack spacing={4} align="stretch">
        <Heading>{recipe.label}</Heading>
        <Image src={recipe.image} alt={recipe.label} />
        <Text>Meal Type: {recipe.mealType}</Text>
        <Text>Dish Type: {recipe.dishType}</Text>
        {/* ... (add other details such as total cooking time, diet label, etc.) */}
        <Button onClick={goBack}>Back to Recipes</Button>
      </VStack>
    </Center>
  );
};
