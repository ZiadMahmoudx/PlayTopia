import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGeners from '../hooks/useGeners';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
  const { genres } = useGeners();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
