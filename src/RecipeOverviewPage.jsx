import { Center, Heading } from '@chakra-ui/react';
import { RecipeListPage } from './RecipeListPage'; 

const RecipeOverviewPage = ({ setSelectedRecipe }) => {
  return (
    <Center h="100vh" flexDir="column">
      <Heading mb={3}>Recipe Overview</Heading>
      <RecipeListPage setSelectedRecipe={setSelectedRecipe} />
    </Center>
  );
};

export default RecipeOverviewPage;