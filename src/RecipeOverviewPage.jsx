
//RecipeOvervieuwPage
import { Center, Heading, Input, InputGroup, InputRightElement, VStack, Button } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { RecipeListPage } from './RecipeListPage';
import { useState } from 'react';
import styles from './style';

const RecipeOverviewPage = ({ setSelectedRecipe }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
 
  const allRecipes = [];

  const handleSearch = () => {
    <Button onClick={handleSearch}>Search</Button>
    const trimmedQuery = searchQuery.trim().toLowerCase();

    if (trimmedQuery === '') {
      setInvalidInput(true);
      setFilteredRecipes([]);
    } else {
      setInvalidInput(false);

      const filtered = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(trimmedQuery)
      );

      setFilteredRecipes(filtered);
    
      if (filtered.length === 0) {
        setInvalidInput(true);
      } else {
        setInvalidInput(false);
      }
    }
  };

  return (
    <Center h="100%" flexDir="column" style={styles.container}>
      <Heading mb={3} style={styles.heading}>Recipe Overview</Heading>
      <VStack spacing={4} align={'stretch'} p={4} style={styles.searchBox}>
        <InputGroup width="70%">
          <Input
            type="text"
            value={invalidInput ? 'No result' : searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by recipe name"
            color={'green.50'}
            mb="4"
            _placeholder={{ opacity: 1, color: 'gray.500' }}
            boxShadow='inner' p='6' rounded='md'
            bg='green.50'
            style={{ color: 'gray'}}
          />
          <InputRightElement pointerEvents="none">
            <FaSearch color="gray.500" />
          </InputRightElement>
        </InputGroup>
        
        {invalidInput && (
          <Text color="red.500" fontSize="sm">
            Please enter a valid search query.
          </Text>
        )}
        <RecipeListPage
          setSelectedRecipe={setSelectedRecipe}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          recipes={filteredRecipes}
        />
      </VStack>
    </Center>
  );
};

export default RecipeOverviewPage;