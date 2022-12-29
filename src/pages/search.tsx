import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { dummyList } from '../data';

const drawStars = (n: number): string => {
  let stars = "";
  for (let i = 0; i < n; i++) stars += "★";
  return stars;
};

const drawHash = (list: string[]): string => {
  let strHash = "";
  for (let i = 0; i < list.length; i++) strHash += "#" + list[i] + " ";
  return strHash;
};

export const Search = () => {

  return (
    <Box margin="7">
      <Button size="md" marginBottom={5}>
        뒤로
      </Button>
      <Text fontSize="3xl" fontWeight="bold">
        작성한 리스트
      </Text>
      <Box m={2} marginTop="5">
        {dummyList.map((it) => (
          <Flex
            alignContent="flex-start"
            bgColor="#E2E2E2"
            key={it.id}
            borderRadius="10px"
            mb="8px"
          >
            <Box p={3} alignItems="center">
              {it.picture.length === 0 ? (
                <Flex
                  w="130px"
                  h="130px"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray"
                  color="white"
                  borderRadius="10px"
                >
                  사진없음
                </Flex>
              ) : (
                <Flex bg="gray" color="white">
                  {it.picture}
                </Flex>
              )}
            </Box>
            <Spacer />
            <Box width="100%" p={3}>
              <Flex alignItems="flex-end">
                <Text fontWeight="bold">{it.name}</Text>
                <Text fontSize="xs" marginLeft={5}>
                  {it.category}
                </Text>
              </Flex>
              <Text fontSize="sm">{new Date(it.date).toLocaleString()}</Text>
              <Text color="#FFC700" marginTop="-2">
                {drawStars(it.score)}
              </Text>
              <Box
                fontSize="sm"
                bg="#F4F4F4"
                borderRadius={10}
                p={1}
                width="fit-content"
              >
                {it.content}
              </Box>
              <Text paddingLeft={1} fontSize="sm">
                {drawHash(it.result)}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};
