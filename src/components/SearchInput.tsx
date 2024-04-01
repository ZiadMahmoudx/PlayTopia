import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup marginX={3} width="500px">
      {' '}
      {/* Adjusted width */}
      <InputLeftElement pointerEvents="none" children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search Games..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
