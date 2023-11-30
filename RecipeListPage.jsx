//RecipeListPage
import { useState } from 'react';
import { Center, Heading, Input} from '@chakra-ui/react';
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
  Box
  
} from '@chakra-ui/react';


export const RecipeListPage = ({ setSelectedRecipe }) => {
  console.log('Rendering RecipeListPage');

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
    <Center h="100vh" flexDir="column" color={'green.500'}>
      <Box maxW="32rem" height="100%">
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
       <Card>
       <CardBody>
         <Image src={recipe.image} alt={recipe.label} borderRadius="lg" />
         <Stack mt="6" spacing="3">
           <Heading size="md">{recipe.label}</Heading>
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
             <p>Meal type: {recipe.mealType}</p>
             <p>Dish type: {recipe.dishType}</p>
             <p>Diet label: {recipe.dietLabels?.join(', ')}</p>
             <div>
               {recipe.cautions?.length > 0 && (
                 <div>
                   <strong>Cautions:</strong> {recipe.cautions.join(', ')}
                 </div>
               )}
               {recipe.healthLabels.includes('Vegan') && <div><strong>Vegan:</strong></div>}
               {recipe.healthLabels.includes('Vegetarian') && <div><strong>Vegetarian:</strong></div>}
             </div>
             
           </Text>
         </Stack>
       </CardBody>
          <Divider />
          <CardFooter>
        
  <ButtonGroup spacing="2" colorScheme="teal">
    <Button variant="solid" colorScheme="green">
      Selected recipe
    </Button>
    <Button variant="ghost" colorScheme="green">
      Go back
    </Button>
  </ButtonGroup>

          </CardFooter>
        </Card>
      ))}
    </Center>
  );
};