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

export default function Room() {
  const gray = useColorModeValue('gray.600', 'gray.300');

  return (
    <VStack alignItems={'flex-start'}>
      <Box position={'relative'} overflow={'hidden'} mb={3} rounded={'3xl'}>
        <Image
          minH={280}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-653065914931528679/original/3d557c12-1034-41fb-87f6-899fa7a25082.jpeg?im_w=720"
        />
        <Button
          variant={'unstyled'}
          position={'absolute'}
          top={2}
          right={0}
          color={'white'}
        >
          <FaRegHeart size={'20px'} />
        </Button>
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
        <Text fontSize={'sm'} color={gray}>
          Seoul, S.Korea
        </Text>
      </Box>
      <Text fontSize={'sm'} color={gray}>
        <Text as={'b'}>$72</Text> / night
      </Text>
    </VStack>
  );
}
