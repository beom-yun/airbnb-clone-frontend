import { Box, HStack, Skeleton } from '@chakra-ui/react';

export default function RoomSkeleton() {
  return (
    <Box>
      <Skeleton height={280} rounded="2xl" mb={7} />
      <HStack justifyContent={'space-between'}>
        <Skeleton rounded="lg" width="60%" height={5} mb={1} />
        <Skeleton rounded="lg" width="15%" height={5} />
      </HStack>
      <Skeleton rounded="lg" w="40%" height={5} mb={1} />
      <Skeleton rounded="lg" w="30%" height={5} mb={3} />
      <Skeleton rounded="lg" w="25%" height={5} />
    </Box>
  );
}
