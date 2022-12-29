import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  Input,
  Image,
  Textarea,
  Grid,
  Select,
  GridItem,
  Divider,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { BsFillRecordCircleFill, BsFillStopCircleFill } from "react-icons/bs";

interface RecordingIconProps {
  recording: boolean;
}

const RecordingIcon = (props: RecordingIconProps) => {
  return !props.recording ? (
    <BsFillRecordCircleFill size={32} />
  ) : (
    <BsFillStopCircleFill size={32} color="#f00" />
  );
};

interface InputPanelContainerProps {
  children?: React.ReactNode;
}

const InputPanelContainer = (props: InputPanelContainerProps) => {
  const { children } = props;
  return (
    <Flex alignItems="center" justifyContent="center" bg="#eee">
      {children}
    </Flex>
  );
};
export const View = () => {
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
    <Box display="flex" flexDirection="column">
      <Box
        w="90%"
        h="100%"
        m="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading size="xl">Blue Moon</Heading>
        <Image src="images/cocktail.png" w="40%" />
      </Box>
      <Box w="90%" h="100%" m="auto" bgColor="green"></Box>
      <Tabs mt="16px" isFitted size={["md", "lg"]}>
        <TabList>
          <Tab>술첩 정보</Tab>
          <Tab>나의 느낌</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <InputPanelContainer>
              <Grid
                h="100%"
                w="100%"
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(3, 1fr)"
                gap={2}
                bgColor="white"
              >
                <GridItem mb="20px">
                  <Heading size="md" mb="10px">
                    술 종류
                  </Heading>
                  <Select w="90%"></Select>
                </GridItem>
                {gridItems}
              </Grid>
            </InputPanelContainer>
          </TabPanel>
          <TabPanel>
            <InputPanelContainer>
              {
                <IconButton
                  my="24px"
                  aria-label="record-button"
                  size="2xl"
                  icon={<RecordingIcon recording={false} />}
                />
              }
            </InputPanelContainer>
            <Flex justifyContent="space-around" mt="20px">
              <Flex flexDirection="column" alignItems="center">
                <Heading size="md">별점</Heading>
                <Flex mt="25px">
                  <IconButton
                    colorScheme="Blue"
                    aria-label="star"
                    icon={<Image mx="5px" w="50px" src="images/star.svg" />}
                  />
                  <IconButton
                    colorScheme="Blue"
                    aria-label="star"
                    icon={<Image mx="5px" w="50px" src="images/star.svg" />}
                  />
                  <IconButton
                    colorScheme="Blue"
                    aria-label="star"
                    icon={<Image mx="5px" w="50px" src="images/star.svg" />}
                  />
                  <IconButton
                    colorScheme="Blue"
                    aria-label="star"
                    icon={<Image mx="5px" w="50px" src="images/star.svg" />}
                  />
                  <IconButton
                    colorScheme="Blue"
                    aria-label="star"
                    icon={<Image mx="5px" w="50px" src="images/star.svg" />}
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Heading size="md" mb="10px">
                  한줄평
                </Heading>
                <InputPanelContainer>
                  <Textarea bgColor="white" />
                </InputPanelContainer>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
