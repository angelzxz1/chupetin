import { Box, Flex, Heading } from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <Flex
        as="h1"
        bgGradient="linear(to-br, purple.500, pink.500)"
        w="100%"
        h="200px"
        borderRadius="full"
        align="center"
        justify="center"
      >
        <Heading>Get drunk, no more bullshit</Heading>
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
    </>
  );
};

export default Main;
