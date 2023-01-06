import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getRoom } from '../api';
import { IRoomDetail } from '../types';

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(['rooms', roomPk], getRoom);

  return (
    <Box mt={10} px={{ base: 10, lg: 40 }}>
      <Skeleton h={'43px'} w={'50%'} isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        mt={8}
        gap={2}
        rounded={'xl'}
        overflow={'hidden'}
        h={'60vh'}
        templateRows={'1fr 1fr'}
        templateColumns={'repeat(4, 1fr)'}
      >
        {[0, 1, 2, 3, 4].map(index => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            key={index}
            overflow={'hidden'}
          >
            <Skeleton isLoaded={!isLoading} h={'100%'} w={'100%'}>
              <Image
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
