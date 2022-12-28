import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt="48px"
      px="32px"
    >
      <Heading as="h1">술첩</Heading>
      <Box mt="24px" display="flex" flexDirection="row" alignItems="baseline">
        <Heading size="md">최근 기록</Heading>
        <Box display="flex" alignItems="center" cursor="pointer">
          <Text ml="12px">더 보기</Text>
          <HiChevronRight />
        </Box>
      </Box>
      <Box
        mt="16px"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        <Box m="8px" w="128px" h="192px" bg="#ccc" />
        <Box m="8px" w="128px" h="192px" bg="#ccc" />
        <Box m="8px" w="128px" h="192px" bg="#ccc" />
      </Box>
      <Button mt="24px" size="lg">
        기록 추가
      </Button>
    </Box>
  );
};
