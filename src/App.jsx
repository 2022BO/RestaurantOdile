// App.jsx
import { useState } from 'react';
import { App as ChakraApp, ChakraProvider } from '@chakra-ui/react';
import RecipeOverviewPage from "./RecipeOverviewPage";
import RecipePage from "./RecipePage"; // Check the path and filename here
import theme from "./theme";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <ChakraProvider theme={theme}>
      <ChakraApp>
        {selectedRecipe ? (
          <RecipePage
            selectedRecipe={selectedRecipe}
            goBack={() => setSelectedRecipe(null)}
          />
        ) : (
          <RecipeOverviewPage setSelectedRecipe={setSelectedRecipe} />
        )}
      </ChakraApp>
    </ChakraProvider>
  );
};

export default App;


