import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo2.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <HStack spacing={4}>
        <Image src={logo} boxSize="60px" />
        <Text fontSize={'xl'} fontWeight={'extrabold'} color={'brand.primary'}>
          PlayTopia
        </Text>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
