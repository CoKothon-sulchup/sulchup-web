import React, { useState } from "react";
import { Box, Heading, InputGroup, InputLeftElement, Flex, Spacer } from "@chakra-ui/react";
import { Text, Input } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

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
  const navigate = useNavigate();
  const [searchKey, setSEarchKey] = useState('');
  const [result, setResult] = useState<typeof dummyList>([]);

  const handleBackClick = () => {
    navigate(-1);
  }

  const handleSearch = () => {
    setResult(dummyList.filter((d) => d.name.startsWith(searchKey) || d.name.endsWith(searchKey)));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSEarchCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSEarchKey(e.target.value);
  };

  return (
    <Flex pt='48px' px='32px' flexDirection='column'>
      <Flex alignItems='center' cursor='pointer' onClick={handleBackClick}>
        <AiOutlineLeft size={24} />
      </Flex>
      <Heading mt='32px'>술첩 검색하기</Heading>
      <Flex flex={1} mt='24px' flexDirection='column'>
        <InputGroup alignContent='center' justifyContent='center' mb='48px'>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<BsSearch size={20} color="black" />}
          />
          <Input
            size="lg"
            focusBorderColor="black"
            placeholder="검색어 입력"
            value={searchKey}
            onKeyDown={handleKeyDown}
            onChange={handleSEarchCHange}
            bg="#E2E2E2"
          />
        </InputGroup>
        {result.length === 0 ? (
          <Flex flex={1} justifyContent='center'>
            <Text fontSize='18px'>최근 검색어가 없습니다.</Text>
          </Flex>
        ) : result.map((it) => (
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
      </Flex>
    </Flex>
  );
};
