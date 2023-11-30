
import { useState } from 'react';
import RecipeOverviewPage from "./RecipeOverviewPage";
import RecipePage from "./RecipePage"; 
import { ChakraProvider, theme } from '@chakra-ui/react';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <ChakraProvider theme={theme}>
      {selectedRecipe ? (
        <RecipePage
          selectedRecipe={selectedRecipe}
          goBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <RecipeOverviewPage setSelectedRecipe={setSelectedRecipe} />
      )}
    </ChakraProvider>
  );
};

export default App;


