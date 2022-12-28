import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export const View = () => {
  return (
    <Box display="flex">
      <Box w="90%" h="100%" m="auto" bgColor="blue">
        <Heading size="xl">Blue Moon</Heading>
        <Image src="images/cocktail.png" w="70%" />
      </Box>
      <Box w="90%" h="100%" m="auto" bgColor="green"></Box>
    </Box>
  );
};
