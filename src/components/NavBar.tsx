import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo2.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding="10px" spacing={4} align="center">
      <HStack spacing={4}>
        <Image src={logo} boxSize="60px" />
        <Text fontSize="xl" fontWeight="extrabold" color="brand.primary">
          PlayTopia
        </Text>
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
