import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

export const Search = () => {
  const dummyList = [
    {
      id: 1,
      picture: "",
      date: new Date().getTime(),
      place: "",
      people: "",
      category: "맥주",
      name: "하얼빈 맥주 (Harbin Beer)",
      price: 11000,
      alcohol: 10.0,
      year: "",
      content:
        "이름부터 '크리스마스'인 이 맥주는 벨기에식 윈터 에일(Winter Ale)로, 알코올 도수가 높다.5가지 몰트와 향신료를 사용하여 만들어졌으며 건과일류의 풍미와 뱅쇼와 같은 향신료의 풍미가 진득하다. 추운 겨울 특별한 크리스마스를 보내고 싶다면 추천!",
      voice: false,
      score: 3,
      result: ["부드러움", "가벼움"],
    },
    {
      id: 2,
      picture: "",
      date: new Date().getTime(),
      place: "",
      people: "",
      category: "와인",
      name: "예르만, 더블유 드림스 (Jermann, W Dreams)",
      price: 240000,
      alcohol: 14.0,
      year: "2020",
      content:
        "선명한 보랏빛을 띠며, 딸기, 자두, 바이올렛, 커피의 아로마가 느껴진다. 입 안에서는 잘 익은 과실 풍미와 기분 좋은 산미, 풍성한 탄닌이 인상적인 와인이다.",
      voice: false,
      score: 4,
      result: ["당도 없음", "무거움", "산미 강함"],
    },
    {
      id: 3,
      picture: "",
      date: new Date().getTime(),
      place: "",
      people: "",
      category: "맥주",
      name: "하이네켄",
      price: 11000,
      alcohol: 5.0,
      year: "",
      content: "진짜 진하고 맛있네요.",
      voice: false,
      score: 4,
      result: ["무거움"],
    },
    {
      id: 4,
      picture: "",
      date: new Date().getTime(),
      place: "",
      people: "",
      category: "위스키",
      name: "잭 다니엘 (Jack Daniel)",
      price: 53900,
      alcohol: 36.5,
      year: "",
      content: "",
      voice: false,
      score: 2,
      result: ["부드러움"],
    },
    {
      id: 6,
      picture: "",
      date: new Date().getTime(),
      place: "용산 노츠",
      people: "",
      category: "칵테일",
      name: "나와 나타샤와 흰 당나귀 ",
      price: 18000,
      alcohol: 0,
      year: "",
      content: "시의 내용을 배와 유자로 한국적으로 담아냈다는 내용",
      voice: false,
      score: 4,
      result: ["달콤함"],
    },
    {
      id: 7,
      picture: "",
      date: new Date().getTime(),
      place: "",
      people: "",
      category: "칵테일",
      name: "모히토 (Mojito)",
      price: 36900,
      alcohol: 19.0,
      year: "",
      content:
        "시각적으로도 후각적으로도 미각적으로도. 온몸으로 청량함의 끝을 알려줌",
      voice: false,
      score: 4,
      result: ["달콤함"],
    },
    {
      id: 8,
      picture: "",
      date: new Date().getTime(),
      place: "올드패션드",
      people: "",
      category: "칵테일",
      name: "올드패션드 (Old fashioned)",
      price: 15000,
      alcohol: 34.0,
      year: "",
      content:
        "올드 패션드(Old Fashioned). 고전 칵테일의 원형 중 하나는 알코올에 단맛(설탕)과 쓴맛(비터즈)을 더한 것",
      voice: false,
      score: 4,
      result: ["달콤함", "씀"],
    },
  ];

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