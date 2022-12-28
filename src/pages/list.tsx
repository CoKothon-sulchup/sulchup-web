import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

export const List = () => {
  const datas = {
    name: "Jim Beam HighBall",
    tag: ["Sweat", "Light"],
    date: "2022.12.29",
    rate: "4.7",
  };

  const tag = datas.tag.map((tags) => (
    <Tag size="lg" variant="subtle" colorScheme="gray">
      <TagLabel>#{tags}</TagLabel>
    </Tag>
  ));

  const grids = [
    {
      id: 1,
      content: (
        <Box
          w="250px"
          h="340px"
          bgColor="gray.200"
          borderRadius="25px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image src="images/cocktail.png" alt="cocktail" w="70%" mt="10px" />

          <Text fontSize="2xl" mt="7px">
            {datas.name}
          </Text>

          <Box display="flex" justifyContent="space-evenly" w="80%">
            {tag}
          </Box>

          <Text fontSize="lg" mt="10px">
            {datas.date}
          </Text>
          <Text fontSize="xl">{datas.rate} / 5.0</Text>
        </Box>
      ),
    },
    {
      id: 1,
      content: (
        <Box
          w="250px"
          h="340px"
          bgColor="gray.200"
          borderRadius="25px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image src="images/cocktail.png" alt="cocktail" w="70%" mt="10px" />

          <Text fontSize="2xl" mt="7px">
            {datas.name}
          </Text>

          <Box display="flex" justifyContent="space-evenly" w="80%">
            {tag}
          </Box>

          <Text fontSize="lg" mt="10px">
            {datas.date}
          </Text>
          <Text fontSize="xl">{datas.rate} / 5.0</Text>
        </Box>
      ),
    },
  ];

  const gridList = grids.map((i) => (
    <GridItem m="auto" key={i.id}>
      {i.content}
    </GridItem>
  ));

  return (
    <Box w="90%" h="100%" m="auto" bgColor="">
      <Grid
        h="100%"
        w="100%"
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={6}
      >
        {gridList}
      </Grid>
    </Box>
  );
};
