import React from 'react';
import { Flex, Heading, IconButton, Input, Image, Textarea, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { BsFillRecordCircleFill } from 'react-icons/bs';

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

export const Write = () => {
  return (
    <Flex w='100%' flexDirection='column' alignItems='center' pt='32px' px={['24px', '60px']}>
      <Heading mr='auto'>술첩 기록</Heading>
      <Flex mt='32px' w='100%'>
        <Image w={['100px', '200px']} h={['100px', '200px']} src='https://via.placeholder.com/200' />
        <Flex ml={['24px', '32px']} flex={1} flexDirection='column'>
          <Input placeholder='술 이름' />
          <Input mt={['16px', '24px']} placeholder='마신 날짜' />
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
