import React, { useEffect } from 'react';
import {
  Flex,
  Heading,
  Button,
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
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";

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

const today = new Date();

export const Write = () => {
  console.log(`date: ${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`)
  // const [drinkDate, setDrinkDate] = useState(`${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`);
  const names = ["마신 장소", "도수", "같이 마신 사람", "가격"];

  // const handleInputChange = (setState: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
  //   return setState(e.target.value);
  // }

  const gridItems = names.map((name) => (
    <GridItem mb="10px">
      <Heading size="md" mb="10px">
        {name}
      </Heading>
      <Input w="90%" border="none" />
      <Divider border="2px" w="90%" />
    </GridItem>
  ));

  const onRecordingStart = () => {
    console.log('recording started');
  };

  const onRecordingStop = () => {
    console.log('recording stopped');
  };

  const navigate = useNavigate();
  const {
    status,
    error,
    mediaBlobUrl,
    startRecording,
    stopRecording,
  } = useReactMediaRecorder({
    audio: true,
    askPermissionOnMount: true,
    onStart: onRecordingStart,
    onStop: onRecordingStop,
  });

  const handleBackClick = () => {
    navigate(-1);
  };

  const toggleRecording = () => {
    if (status === 'recording') {
      stopRecording();
    } else {
      startRecording();
    }
  };

  useEffect(() => {
    if (error) {
      console.log('recorder error:', error);
    }
  }, [error]);

  return (
    <Flex
      w="100%"
      flexDirection="column"
      alignItems="center"
      pt="32px"
      pb="48px"
      px={["24px", "60px"]}
    >
      <Flex
        mr="auto"
        alignItems="center"
        cursor="pointer"
        onClick={handleBackClick}
      >
        <AiOutlineLeft size={24} />
      </Flex>
      <Heading mt="32px" mr="auto">
        술첩 기록
      </Heading>
      <Flex mt="32px" w="100%">
        <Input type="file" />
        {/* <Image w={['100px', '200px']} h={['100px', '200px']} src='https://via.placeholder.com/200' /> */}
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
                {!mediaBlobUrl && (
                  <IconButton
                    my="24px"
                    aria-label="record-button"
                    onClick={toggleRecording}
                    size="2xl"
                    icon={<RecordingIcon recording={status === "recording"} />}
                  />
                )}
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
        <Button>기록</Button>
      </Flex>
    </Flex>
  );
};
