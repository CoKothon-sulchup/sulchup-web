import React, { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';
import { BsFillRecordCircleFill, BsFillStopCircleFill } from 'react-icons/bs';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useReactMediaRecorder } from 'react-media-recorder';

interface RecordingIconProps {
  recording: boolean;
}

const RecordingIcon = (props: RecordingIconProps) => {
  return !props.recording ? <BsFillRecordCircleFill size={32} /> : <BsFillStopCircleFill size={32} color='#f00' />;
};

interface InputPanelContainerProps {
  children: JSX.Element;
}

const InputPanelContainer = (props: InputPanelContainerProps) => {
  const { children } = props;
  return (
    <Flex alignItems='center' justifyContent='center' bg='#eee'>
      {children}
    </Flex>
  );
};

const today = new Date();

export const Write = () => {
  console.log(`date: ${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`)
  const [drinkDate, setDrinkDate] = useState(`${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`);
  const names = ["마신 장소", "도수", "같이 마신 사람", "가격"];

  const handleInputChange = (setState: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    return setState(e.target.value);
  }

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
    <Flex w='100%' flexDirection='column' alignItems='center' pt='32px' px={['24px', '60px']}>
      <Heading mr='auto'>술첩 기록</Heading>
      <Flex mt='32px' w='100%'>
        {/* <Image w={['100px', '200px']} h={['100px', '200px']} src='https://via.placeholder.com/200' /> */}
        <Input w={['150px', '200px']} h={['150px', '200px']} type='file' />
        {/* <Image w={['100px', '200px']} h={['100px', '200px']} src='https://via.placeholder.com/200' /> */}
        <Flex ml={['24px', '32px']} flex={1} flexDirection='column'>
          <Input placeholder='술 이름' />
          <Input mt={['16px', '24px']} type='date' placeholder='마신 날짜' value={drinkDate} onChange={handleInputChange(setDrinkDate)} />
        </Flex>
      </Flex>
      <Flex mt='48px' w='100%' flexDirection='column'>
        <Heading>나의 느낌</Heading>
        <Tabs mt='16px' isFitted size={['md', 'lg']}>
          <TabList>
            <Tab>글쓰기</Tab>
            <Tab>말하기</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <InputPanelContainer>
                <Textarea placeholder='술의 향, 맛, 느낌, 감상 등 지금 생각나는 것을 적어 보세요.' />
              </InputPanelContainer>
            </TabPanel>
            <TabPanel>
              <InputPanelContainer>
                <IconButton my='24px' aria-label='record-button' size='2xl' icon={<BsFillRecordCircleFill />} />
              </InputPanelContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Flex mt='48px'>
          <Heading>추가 정보</Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};
