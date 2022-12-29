import React from "react";
import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleWRiteClick = () => {
    navigate('/write');
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      pt={["32px", "48px"]}
      px={["24px", "48px"]}
    >
      <Flex
        mt={["16px", "24px"]}
        flexDirection="row"
        alignItems="baseline"
        mr="auto"
      >
        <Heading size="md">최근 기록</Heading>
        <Box display="flex" alignItems="center" cursor="pointer">
          <Text ml="12px">더 보기</Text>
          <HiChevronRight />
        </Box>
      </Flex>
      <Box
        mt="16px"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        <Box m="8px" w="128px" h="192px" bg="#ccc" />
        <Box m="8px" w="128px" h="192px" bg="#ccc" />
        <Box m="8px" w="128px" h="192px" bg="#ccc" />
        <Box m="8px" w="128px" h="192px" bg="#ccc" />
      </Box>
      <Button mt="24px" size="lg" onClick={handleWRiteClick}>
        기록 추가
      </Button>
    </Flex>
  );
};
