import { useState } from 'react';
import { Center, Heading, Input } from '@chakra-ui/react';
import { data } from "../src/utils/data"
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Image,
  ButtonGroup,
  Button,
  Divider,
  Box,
} from '@chakra-ui/react';


export const RecipeListPage = ({ setSelectedRecipe }) => {
  const [searchQuery, setSearchQuery] = useState(' ');
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleSearch = () => {
    const filteredRecipes = data.hits.filter(({ recipe }) => {
      const nameMatch = recipe.label
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const labelsMatch = selectedLabels.every((label) =>
        recipe.healthLabels.includes(label),
      );
      return nameMatch && labelsMatch;
    });

    return filteredRecipes;
  };

  const handleLabelToggle = (label) => {
    const updatedLabels = selectedLabels.includes(label)
      ? selectedLabels.filter((l) => l !== label)
      : [...selectedLabels, label];
    setSelectedLabels(updatedLabels);
  };
  
  return (
    <Center h="100vh" flexDir="column" color={'green.50'}>
      <Box maxW="32rem">
        
        <Heading mb={3}>Your Recipe App</Heading>
        <Stack spacing={3}>
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by recipe name"
            color={'green.50'}
            mb="4"
            _placeholder={{ opacity: 1, color: 'gray.500' }}
          />
        </Stack>
      </Box>
      <div>
        <Input
          type="checkbox"
          checked={selectedLabels.includes('Pescatarian')}
          onChange={() => handleLabelToggle('Pescatarian')}
        />
        Pescetarian
        <Input
          type="checkbox"
          checked={selectedLabels.includes('Gluten-Free')}
          onChange={() => handleLabelToggle('Gluten-Free')}
        />
        Gluten-Free
        <Input
          type="checkbox"
          checked={selectedLabels.includes('Sesame-Free')}
          onChange={() => handleLabelToggle('Sesame-Free')}
        />
        Sesame-Free
        <Input
          type="checkbox"
          checked={selectedLabels.includes('Vegetarian')}
          onChange={() => handleLabelToggle('Vegetarian')}
        />
        Vegetarian
        <Input
          type="checkbox"
          checked={selectedLabels.includes('Vegan')}
          onChange={() => handleLabelToggle('Vegan')}
        />
        Vegan
      </div>
      {handleSearch().map(({ recipe }) => (
        <Card
          maxW="sm"
          key={recipe.foodId}
          onClick={() => setSelectedRecipe(recipe)}
          color={'green.500'}
        >
          <CardBody >
            <Image src={recipe.image} alt={recipe.label} borderRadius="lg" />
            <Stack mt="6" spacing="3" >
              <Heading size="md">{recipe.label} </Heading>
              <Text
                fontSize={{
                  base: 'sm',
                  sm: 'md',
                  md: 'lg',
                  lg: 'xl',
                  xl: '2xl',
                }}
                color={'green.700'}
              >
                {recipe.dietLabels.length > 0 && (
                  <p>Diet label: {recipe.dietLabels.join(', ')}</p>
                )}

                {recipe.cautions.length > 0 && (
                  <p>Cautions: {recipe.cautions.join(', ')}</p>
                )}
                <p>Meal type: {recipe.mealType}</p>
                <p>Dish type: {recipe.dishType}</p>
                {recipe.healthLabels.includes('Vegan') && <p>Vegan</p>}

                {recipe.healthLabels.includes('Vegetarian') && (
                  <p>Vegetarian</p>
                )}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2"
          colorScheme="teal" onClick={clickFn} {...props}>
 
              <Button variant="solid" colorScheme="green">
                Selected recipe
              </Button>
              <Button variant="ghost" colorScheme="green">
                go back
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Center>
  );
};