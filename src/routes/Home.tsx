import { Box, Grid, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <Grid mt={10} px={40} rowGap={8} columnGap={4} templateColumns={'repeat(5, 1fr)'}>
      <VStack alignItems={'flex-start'}>
        <Box overflow={'hidden'} mb={3} rounded={'3xl'}>
          <Image
            h={280}
            src="https://a0.muscache.com/im/pictures/miso/Hosting-653065914931528679/original/3d557c12-1034-41fb-87f6-899fa7a25082.jpeg?im_w=720"
          />
        </Box>
        <Box>
          <Grid gap={2} templateColumns={'6fr 1fr'}>
            <Text as={'b'} noOfLines={1} fontSize={'md'}>
              Hwachon-myeon, Hongcheon, 강원도, 한국
            </Text>
            <HStack spacing={1}>
              <FaStar size={15} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize={'sm'} color={'gray.600'}>
            Seoul, S.Korea
          </Text>
        </Box>
        <Text fontSize={'sm'} color={'gray.600'}>
          <Text as={'b'}>$72</Text> / night
        </Text>
      </VStack>
    </Grid>
  );
}
