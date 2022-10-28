import { Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { FaRegHeart, FaStar } from 'react-icons/fa';

export default function Room() {
  const gray = useColorModeValue('gray.600', 'gray.300');

  return (
    <VStack alignItems={'flex-start'}>
      <Box position="relative" overflow="hidden" mb={3} rounded={'2xl'}>
        <Image
          minH="280"
          src="https://a0.muscache.com/im/pictures/10da01cc-17a4-4eef-99b8-a3eb9005fba8.jpg?aki_policy=large"
        />
        <Button variant={'unstyled'} position="absolute" top={2} right={0} color="white">
          <FaRegHeart size="20px" />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={'5fr 1fr'}>
          <Text as="b" noOfLines={1} fontSize={'sm'}>
            애월읍, 제주시, 제주도, 한국
          </Text>
          <HStack spacing={1}>
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={'sm'} color={gray}>
          제주, 한국
        </Text>
      </Box>
      <Text fontSize={'sm'} color={gray}>
        <Text as="b">$72</Text> / night
      </Text>
    </VStack>
  );
}
