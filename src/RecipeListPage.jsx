
import {useState } from 'react';
import styles from './style';
import { Center, Flex, VStack, Heading, ButtonGroup, Button, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';
import { data } from '../src/utils/data';
import { Image, Box, Checkbox, Container } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { IoIosRestaurant } from 'react-icons/io';
import { FaUtensils } from 'react-icons/fa';

export const RecipeListPage = ({ setSelectedRecipe, searchQuery, invalidInput}) => {

const [selectedLabels, setSelectedLabels] = useState([]);

const searchRecipes = () => {
return data.hits.filter(({ recipe }) => {
const nameMatch = recipe.label.toLowerCase().includes(searchQuery.toLowerCase());
const labelsMatch = selectedLabels.every((label) => recipe.healthLabels.includes(label));
return nameMatch && labelsMatch;
});
};

const handleLabelToggle = (label) => {
const updatedLabels = selectedLabels.includes(label)
? selectedLabels.filter((l) => l !== label)
: [...selectedLabels, label];
setSelectedLabels(updatedLabels);
};

return (
<>

<Container maxW={'xl'} style={{ ...styles.container, overflowY: 'auto' }}>
<Center h="100%" w="100%" alignItems={"center"}>

<Flex 
direction="row" 
wrap="wrap" 
justify="center"
align="stretch" 
spacing={1} 
>

{searchRecipes().length > 0 ? (
searchRecipes().map(({ recipe }) => (
  <VStack
    key={recipe.label}
    spacing={3}
    align='stretch'
    padding={'8px'}
    style={{ ...styles.recipeCard, position: "relative", zIndex: 2 }}
    
  >
     <Box
      backgroundColor="orange.300" 
      borderRadius="10px"
      padding="7px"
      textAlign="center"
    >
      <Heading
        size="md"
        style={{
          ...styles.recipeTitle,
          marginTop: '2',
          fontSize: 'medium',
          color: 'beige.900',
          bg: 'red',
          borderColor: '#EE7214',
          borderWidth: "2px",
          borderRadius: "8px",
        }}
      >
        {recipe.label}
        
      </Heading>


    </Box>
    
  <Flex
    direction={{ base: 'column', md: 'row' }} 
    wrap="wrap" 
    justify="space-between"
    align="stretch"
    padding="16px"
    spacing={4} 
    borderWidth="2px"
    borderRadius="lg"
    overflow="hidden"
    maxW="sm"
    marginBottom="4"
    fontSize={{
      base: 'sm',
      sm: 'md',
      md: 'lg',
      lg: 'xl',
      xl: '2xl',
      }}
      color={'#5F6F52'}
      >
  {recipe.mealType && (
                    <Tag
                      size="sm"
                      variant="subtle"
                      colorScheme="blue"
                      marginLeft="2"
                    >
                      <TagLeftIcon as={IoIosRestaurant} />
                      <TagLabel>{recipe.mealType.join(', ')}</TagLabel>
                    </Tag>
                  )}

                  {recipe.dishType && (
                    <Tag
                      size="sm"
                      variant="subtle"
                      colorScheme="orange"
                      marginLeft="2"
                    >
                      <TagLeftIcon as={FaUtensils} />
                      <TagLabel>{recipe.dishType.join(', ')}</TagLabel>
                    </Tag>
                  )}

<Image
        h='20vh'
        w='50%'
        src={recipe.image}
        alt={recipe.label}
        borderRadius='8px'
        boxShadow= '0 2px 4px rgba(0, 0, 0, 0.1)'
        border= '2px solid #527853'
        margin='8px'
        objectFit='cover'
        style={{ zIndex: 1 }}
      />


<VStack align="flex-start" justify="flex-start" spacing={2}></VStack>

<ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: 'x-small' }}>
<li>
<Checkbox
type='checkbox'
checked={selectedLabels.includes('Pescatarian')}
onChange={() => handleLabelToggle('Pescatarian')}

>
Pescetarian
</Checkbox>
</li>
<li>
<Checkbox
type='checkbox'
checked={selectedLabels.includes('Gluten-Free')}
onChange={() => handleLabelToggle('Gluten-Free')}
>
Gluten-Free
</Checkbox>
</li>
<li>
<Checkbox
type='checkbox'
checked={selectedLabels.includes('Sesame-Free')}
onChange={() => handleLabelToggle('Sesame-Free')}
>
Sesame-Free
</Checkbox>
</li>
<li>
<Checkbox
type='checkbox'
checked={selectedLabels.includes('mealType')}
onChange={() => handleLabelToggle('mealType')}
>
Vegetarian
</Checkbox>
</li>
<li>
<Checkbox
type='checkbox'
checked={selectedLabels.includes('Vegan')}
onChange={() => handleLabelToggle('Vegan')}
>
Vegan
</Checkbox>
</li>
</ul>

{recipe.cautions?.length > 0 && (
<div  style={{ marginBottom: '10px', color: 'red', textTransform: 'lowercase', fontSize: 'small'}}>
<strong>Cautions:</strong> {recipe.cautions.join(', ')}
</div>
)}

{recipe.healthLabels.includes('Vegan') && (
<div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', color: 'green', textTransform: 'lowercase', fontSize: 'small'}}>
<strong>Vegan:</strong> <FaCheck style={{ color: 'green', marginLeft: '4px' }} />
</div>
)}

{recipe.healthLabels.includes('Vegetarian') && (
<div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', color: 'green', textTransform: 'lowercase', fontSize: 'small'}}>
<strong>Vegetarian:</strong> <FaCheck style={{ color: 'green', marginLeft: '4px' }} />
</div>

)}
{recipe.dietLabels && recipe.dietLabels.length > 0 && (
<div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', color: 'green', textTransform: 'lowercase', fontSize: 'small'}}>
<strong>Diet label:</strong> <FaCheck style={{ color: 'green', marginLeft: '4px' }} />
</div>
)}


<ButtonGroup spacing="1" colorScheme="teal" style={{ marginBottom: '5px' }}>

<Button
variant="solid"
colorScheme="green"
onClick={() => setSelectedRecipe(recipe)}
padding={2} 
>
                        Selected recipe
                      </Button>
                    </ButtonGroup>
                  </Flex>
                </VStack>
))
            ) : (
              <Text color="red.500" fontSize="sm">
              {invalidInput ? 'No results found.' : 'Try again...'}
            </Text>
          )
        }
          </Flex>
        </Center>
      </Container>
    </>
  );
};