//RecipePage
import React from 'react';
import { Center, Heading, Image, Text, VStack, HStack, Button, Box } from "@chakra-ui/react";
import styles from './style';


const RecipePage = ({ selectedRecipe, goBack }) => {
  if (!selectedRecipe || typeof selectedRecipe !== 'object') {
    return (
      <Center>
        <VStack spacing={4} align="stretch">
          <Text>No Recipe selected.</Text>
          <Button onClick={goBack}>Back to Recipes</Button>
        </VStack>
      </Center>
    );
  }

  
    const {
      label,
      image,
      mealType,
      dishType,
      dietLabels,
      healthLabels,
      ingredientLines,
      totalTime,
      totalNutrients,
      cautions,
      url,
      yield: recipeYield,
    } = selectedRecipe || {};

  return (
    <Center>
      <VStack spacing={4} align="stretch" style={styles.container}>
     <Box>
     <Text style={styles.text}>
  <span style={{ ...styles.boldText}}>Soort Maaltijd:</span><br />  {mealType.join(', ')}
</Text>
        
          <Heading style={styles.heading}>{label}</Heading>
          <Image
            src={image}
            alt={label}
            borderRadius={"md"}
            objectFit={"cover"}
            boxShadow={"lg"}
            style={styles.image}
            maxW="400px" // Set the maximum width for the image
            maxH="300px" // Set the maximum height for the image
          />
        </Box>
        <Text style={styles.text}>
          <span style={styles.boldText}>Soort Gerecht:</span><br />  {dishType}
        </Text>
        <Text style={styles.text}>
          <span style={styles.boldText}>Ingredients:</span><br /> 
          {ingredientLines.map((ingredient, index) => (
    <React.Fragment key={index}>
      {ingredient}
      {index < ingredientLines.length - 1 && <br />} {/* Voeg <br /> toe tussen de ingrediënten, behalve na de laatste */}
    </React.Fragment>
  ))}
        </Text>
        
        <Text style={styles.text}>
    <span style={styles.boldText}>Total Cooking Time:</span><br />  {totalTime} minutes
        </Text>
        <Text style={styles.text}>
          <span style={styles.boldText}>Health Labels:</span><br />  {healthLabels.join(', ')}
        </Text>
        <Text style={styles.text}>
          <span style={styles.boldText}>Diet Labels:</span><br />  {dietLabels.join(', ')}
        </Text>
        <Text style={styles.text}>
          <span style={styles.boldText}>Cautions:</span><br />  {cautions.join(', ')}
        </Text>
        <Text style={styles.text}>
          <span style={styles.boldText}>Yield:</span><br />  {recipeYield}
        </Text>
        <VStack align="stretch" spacing={4} style={styles.text}>
          <Text>
            <span style={styles.boldText}>Total Nutrients:</span>
          </Text>
          <VStack align="stretch" spacing={0}>
            {Object.entries(totalNutrients).map(([key, value]) => (
              <Text key={key} fontSize="8">
                {value.label.toLowerCase()}: {value.quantity} {value.unit}
              </Text>
            ))}
          </VStack>
        </VStack>

        <Button onClick={goBack} colorScheme="teal" style={styles.button}>
          Back to Recipes
        </Button>
        <Text style={styles.text}>
          For more details, visit:<br />
          <a href={url} target="_blank" rel="noopener noreferrer" style={styles.underlinedLink}>
            {url}
          </a>
        </Text>
      </VStack>
    </Center>
  );
};
export default RecipePage;