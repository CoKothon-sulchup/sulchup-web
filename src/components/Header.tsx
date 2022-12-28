import React from 'react';
import { Box, Heading, IconButton } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSearchClick = () => {
    navigate('/search');
  }

  return (
    <Box w='100%' display='flex' alignItems='row' justifyContent='space-between' py='16px' px='32px'>
      <IconButton variant='ghost' aria-label='menu' icon={<AiOutlineMenu />} />
      <Heading as='h1' size='lg' cursor='pointer' onClick={handleLogoClick}>
        술첩
      </Heading>
      <IconButton variant='ghost' aria-label='search' icon={<BsSearch />} onClick={handleSearchClick} />
    </Box>
  );
};

