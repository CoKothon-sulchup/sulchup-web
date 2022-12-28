import React from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from '../components'

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <Box width='100%' height='100vh' bg='#eee'>
      <Box mx='auto' maxWidth={768} minHeight='100%' bg='#fff'>
        <Header />
        {children}
      </Box>
    </Box>
  );
};
