import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Skeleton h={'200px'} bg={'gray.100'}>
        {' '}
        {/* Set background color */}
        <CardBody>
          <SkeletonText mt={4} noOfLines={2} spacing={4} /> {/* Adjust line spacing */}
          <SkeletonText noOfLines={1} />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
