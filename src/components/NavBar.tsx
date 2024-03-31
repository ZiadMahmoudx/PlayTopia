import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text fontSize={'larger'} fontWeight={'bold'}>
          PlayTopia
        </Text>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
