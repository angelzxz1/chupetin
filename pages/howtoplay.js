import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const HowToPlay = () => {
  return (
    <Flex fontFamily="roboto" direction="column">
      <Flex
        mt={4}
        as="h1"
        bgGradient={useColorModeValue(
          "linear(to-tr, orange.400, green.500)",
          "linear(to-br, purple.400, green.500)"
        )}
        w="100%"
        h="200px"
        borderRadius="full"
        align="center"
        justify="center"
        transition="all 400 ease"
        position="relative"
        overflow="hidden"
        // zIndex="1"
        _hover={{
          _before: {
            opacity: 1,
          },
        }}
        _before={{
          position: "absolute",
          content: "''",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          bgGradient: useColorModeValue(
            "linear(to-br, purple.400, green.500)",
            "linear(to-tr, orange.400, green.500)"
          ),
          // zIndex: -1,
          transition: "opacity 0.2s linear",
          opacity: 0,
        }}
      >
        <Box
          fontSize={{ base: 30, md: 40 }}
          fontFamily="roboto"
          fontWeight="bold"
          transition="font-size 400ms ease"
          zIndex={1}
        >
          Get drunk, No more bullsh*t
        </Box>
      </Flex>
      <Flex justify="center" pt={5}>
        How to play
      </Flex>
      <Flex justify="left" pt={5}>
        - One person will be asking questions, saying the dares or naming the
        rules{" "}
      </Flex>
      <Flex justify="left" pt={5}>
        - Following a clockwise direction (The person on at the left of the
        host), The other person will be answering the questions, doing the
        dares.
      </Flex>
      <Flex justify="left" pt={5}>
        - The rules, once named, will be applied to the whole group.
      </Flex>
      <Flex justify="left" pt={5}>
        - There are 4 categories, Questions: Which are 30 questions totally
        random, Dares: This is truth or dare in which there are 20 truth and 20
        dares making a total of 400 conbinations, Rules: A set of 10 rules and 5
        punishments for a total of 50 combinations and Culture: 30 different
        topics.
      </Flex>
      <Flex justify="left" pt={5}>
        - There are 15 drinking penalties.
      </Flex>
      <Flex justify="left" pt={5}>
        - All this will be selected randomly.
      </Flex>
    </Flex>
  );
};

HowToPlay.title = "How to play";

export default HowToPlay;
