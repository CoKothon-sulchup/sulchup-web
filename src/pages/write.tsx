import React from "react";

import {
  Flex,
  Heading,
  IconButton,
  Input,
  Image,
  Textarea,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  GridItem,
  Grid,
  Select,
  Divider,
} from "@chakra-ui/react";
import { BsFillRecordCircleFill } from "react-icons/bs";

interface InputPanelContainerProps {
  children: JSX.Element;
}

const InputPanelContainer = (props: InputPanelContainerProps) => {
  const { children } = props;
  return (
    <Flex alignItems="center" justifyContent="center" bg="#eee">
      {children}
    </Flex>
  );
};

export const Write = () => {
  const names = ["마신 장소", "도수", "같이 마신 사람", "가격"];

  const gridItems = names.map((name) => (
    <GridItem mb="10px">
      <Heading size="md" mb="10px">
        {name}
      </Heading>
      <Input w="90%" border="none" />
      <Divider border="2px" w="90%" />
    </GridItem>
  ));

  return (
    <Flex
      w="100%"
      flexDirection="column"
      alignItems="center"
      pt="32px"
      px={["24px", "60px"]}
    >
      <Heading mr="auto">술첩 기록</Heading>
      <Flex mt="32px" w="100%">
        <Image
          w={["100px", "200px"]}
          h={["100px", "200px"]}
          src="https://via.placeholder.com/200"
        />
        <Flex ml={["24px", "32px"]} flex={1} flexDirection="column">
          <Input placeholder="술 이름" />
          <Input mt={["16px", "24px"]} placeholder="마신 날짜" />
        </Flex>
      </Flex>
      <Flex mt="48px" w="100%" flexDirection="column">
        <Heading>나의 느낌</Heading>
        <Tabs mt="16px" isFitted size={["md", "lg"]}>
          <TabList>
            <Tab>글쓰기</Tab>
            <Tab>말하기</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <InputPanelContainer>
                <Textarea placeholder="술의 향, 맛, 느낌, 감상 등 지금 생각나는 것을 적어 보세요." />
              </InputPanelContainer>
            </TabPanel>
            <TabPanel>
              <InputPanelContainer>
                <IconButton
                  my="24px"
                  aria-label="record-button"
                  size="2xl"
                  icon={<BsFillRecordCircleFill />}
                />
              </InputPanelContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Flex justifyContent="space-around">
          <Flex flexDirection="column" alignItems="center">
            <Heading size="md">별점</Heading>
            <Flex mt="25px">
              <IconButton
                colorScheme="Blue"
                aria-label="star"
                icon={<Image mx="5px" w="50px" src="images/star_empty.svg" />}
              />
              <IconButton
                colorScheme="Blue"
                aria-label="star"
                icon={<Image mx="5px" w="50px" src="images/star_empty.svg" />}
              />
              <IconButton
                colorScheme="Blue"
                aria-label="star"
                icon={<Image mx="5px" w="50px" src="images/star_empty.svg" />}
              />
              <IconButton
                colorScheme="Blue"
                aria-label="star"
                icon={<Image mx="5px" w="50px" src="images/star_empty.svg" />}
              />
              <IconButton
                colorScheme="Blue"
                aria-label="star"
                icon={<Image mx="5px" w="50px" src="images/star_empty.svg" />}
              />
            </Flex>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Heading size="md" mb="10px">
              한줄평
            </Heading>
            <InputPanelContainer>
              <Textarea />
            </InputPanelContainer>
          </Flex>
        </Flex>
        <Flex mt="48px" flexDirection="column" justifyContent="center">
          <Heading mb="30px">추가 정보</Heading>
          <Grid
            h="100%"
            w="100%"
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(3, 1fr)"
            gap={2}
          >
            <GridItem mb="20px">
              <Heading size="md" mb="10px">
                술 종류
              </Heading>
              <Select w="90%"></Select>
            </GridItem>
            {gridItems}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};
