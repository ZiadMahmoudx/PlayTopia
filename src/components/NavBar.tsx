import { HStack, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import logo from '../assets/logo2.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  const fontSize = useBreakpointValue({
    base: 'x-small', // Font size for small screens (xs)
    md: 'md', // Font size for medium screens (md)
    lg: 'xl' // Font size for large screens (lg)
  });

  const boxSize = useBreakpointValue({
    base: '40px', // Font size for small screens (xs)
    md: '50px', // Font size for medium screens (md)
    lg: '60px' // Font size for large screens (lg)
  });
  return (
    <HStack>
      <Image src={logo} boxSize={boxSize} />
      <Text fontSize={fontSize} fontWeight="extrabold" color="brand.primary">
        PlayTopia
      </Text>

      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
