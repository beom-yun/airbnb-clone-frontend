import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaRegHeart, FaStar } from 'react-icons/fa';

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function Room({
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
}: IRoomProps) {
  const gray = useColorModeValue('gray.600', 'gray.300');

  console.log(imageUrl, name, rating);

  return (
    <VStack alignItems={'flex-start'}>
      <Box h="280" position="relative" overflow="hidden" mb={3} rounded={'2xl'}>
        <Image minH="280" src={imageUrl} />
        <Button
          variant={'unstyled'}
          position="absolute"
          top={2}
          right={0}
          color="white"
        >
          <FaRegHeart size="20px" />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={'6fr 1fr'}>
          <Text display="block" as="b" noOfLines={1} fontSize={'md'}>
            {name}
          </Text>
          <HStack _hover={{ color: 'red.500' }} spacing={1} alignItems="center">
            <FaStar size={12} />
            <Text>{rating}</Text>
          </HStack>
        </Grid>
        <Text fontSize={'sm'} color={gray}>
          {city}, {country}
        </Text>
      </Box>
      <Text fontSize={'sm'} color={gray}>
        <Text as="b">{price}</Text> / night
      </Text>
    </VStack>
  );
}
