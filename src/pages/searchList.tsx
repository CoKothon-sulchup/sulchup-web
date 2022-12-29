import React from "react";
import { Box } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FiChevronsLeft } from "react-icons/fi";

export const SearchList = () => {
  return (
    <Box margin="7">
      <Button variant="ghost" size="md" fontSize={32} mb={2}>
        <FiChevronsLeft />
      </Button>
      <Box>
        <InputGroup mb={4}>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<BsSearch color="black" />}
          />
          <Input
            size="lg"
            focusBorderColor="black"
            placeholder="술 검색하기"
            bg="#E2E2E2"
          />
        </InputGroup>
      </Box>
    </Box>
  );
};
