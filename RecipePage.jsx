//Recipepage
import React from 'react';
import { Center, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";

const RecipePage = ({ selectedRecipe, goBack }) => {
 
  
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
        <Text>Soort Maaltijd: {recipe.mealType}</Text>
        <Text>Soort Gerecht: {recipe.dishType}</Text>
        <Text>Voedingsstoffen: {recipe.totalNutrients}</Text>
        <Text>Vet Type: {recipe.FAT}</Text>
        <Button onClick={goBack}>Back to Recipes</Button>
      </VStack>
    </Center>
  );
};
export default RecipePage;