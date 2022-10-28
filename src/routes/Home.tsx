import { Box, Grid, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <Grid mt={10} px={40} columnGap={4} rowGap={8} templateColumns={'repeat(5, 1fr)'}>
      <VStack alignItems={'flex-start'}>
        <Box overflow="hidden" mb={3} rounded={'3xl'}>
          <Image
            h="280"
            src="https://a0.muscache.com/im/pictures/10da01cc-17a4-4eef-99b8-a3eb9005fba8.jpg?aki_policy=large"
          />
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
          <Text fontSize={'sm'} color="gray.600">
            제주, 한국
          </Text>
        </Box>
        <Text fontSize={'sm'} color="gray.600">
          <Text as="b">$72</Text> / night
        </Text>
      </VStack>
    </Grid>
  );
}
