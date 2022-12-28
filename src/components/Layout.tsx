import React, { useEffect } from 'react';
import { Box, useBoolean } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { Header } from '../components'

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  const location = useLocation();
  const [header, showHeader] = useBoolean(true);

  useEffect(() => {
    if (location.pathname === '/search' || location.pathname === '/write') {
      showHeader.off();
    } else {
      showHeader.on();
    }
  }, [location.pathname, showHeader]);

  return (
    <Box width='100%' minHeight='100vh' bg='#eee'>
      <Box mx='auto' maxWidth={768} minHeight='100vh' bg='#fff'>
        {header ? <Header /> : null}
        {children}
      </Box>
    </Box>
  );
};
