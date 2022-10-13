import { Button, Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const ShowButton = ({ answer }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Flex fontSize={26} direction="column" w="100%">
      <Button
        colorScheme={useColorModeValue("FreshLemon", "LightLime")}
        onClick={() => {
          setIsShown((prev) => !prev);
          setTimeout(() => {
            setIsShown((prev) => !prev);
          }, 2000);
        }}
      >
        Show answer
      </Button>
      <Box
        display={isShown ? "" : "none"}
        borderRadius="md"
        p={2}
        w="100%"
        justify="center"
        align="center"
      >
        {answer}
      </Box>
    </Flex>
  );
};

const BBox = ({ children }) => {
  return (
    <Flex
      border="1px"
      borderColor="purple.200"
      borderRadius="md"
      p={2}
      mb={2}
      w="100%"
      fontSize={26}
      justify="center"
      align="center"
    >
      {children}
    </Flex>
  );
};

const Question = ({ question, answer }) => {
  return (
    <Flex direction="column" w="100%">
      <BBox>{question}</BBox>
      <ShowButton answer={answer} />
    </Flex>
  );
};

const questions = {
  list: [
    { question: "What's the capital of india?", answer: "Delhi" },

    {
      question: "What geometric shape is generally used for stop signs?",
      answer: "Octagon",
    },

    { question: "What is 'cynophobia'?", answer: "Fear of dogs" },

    {
      question:
        "What is the name of the biggest technology company in South Korea?",
      answer: "Samsung",
    },

    {
      question: "Who was the first woman to win a Nobel Prize (in 1903)?",
      answer: "Marie Curie",
    },

    {
      question: "What is the name of the largest ocean on earth?",
      answer: "Pacific Ocean",
    },

    {
      question:
        "Who was the first woman pilot to fly solo across the Atlantic?",
      answer: "Amelia Earhart",
    },

    { question: "What is the rarest M&M color?", answer: "Brown" },

    {
      question: "Which country consumes the most chocolate per capita?",
      answer: "Switzerland",
    },

    {
      question: "What was the first soft drink in space?",
      answer: "Coca-Cola",
    },

    {
      question: "What is the most consumed manufactured drink in the world?",
      answer: "Tea",
    },

    {
      question: "Which is the only edible food that never goes bad?",
      answer: "Honey",
    },

    { question: "Which country invented ice cream?", answer: "China" },

    {
      question:
        "What was the first feature-length animated movie ever released? (Hint:It was a Disney Movie)",
      answer: "Snow White and the Seven Dwarfs",
    },

    {
      question: "Who created Sherlock Holmes?",
      answer: "Sir Arthur Conan Doyle",
    },

    {
      question: "Which member of the Beatles married Yoko Ono?",
      answer: "John Lennon",
    },

    {
      question: "What sport is dubbed the 'king of sports'?",
      answer: "Soccer",
    },

    { question: "What is Earth's largest continent?", answer: "Asia" },

    {
      question: "What's the smallest country in the world?",
      answer: "Vatican City",
    },

    {
      question: "What's the city with the most diversity in terms of language?",
      answer: "New York City",
    },

    { question: "What country has the most natural lakes?", answer: "Canada" },

    { question: "How many hearts does an octopus have?", answer: "Three" },

    {
      question: "The unicorn is the national animal of which country?",
      answer: "Scotland",
    },

    {
      question: "The name of which African animal means 'river horse'?",
      answer: "Hippopotamus",
    },

    {
      question: "In what type of matter are atoms most tightly packed?",
      answer: "Solids",
    },

    {
      question: "What is the hottest planet in the solar system?",
      answer: "Venus",
    },

    { question: "What is the opposite of matter?", answer: "Anti-matter" },

    { question: "How many teeth does an adult human have?", answer: "32" },

    {
      question: "In the state of Georgia it’s illegal to eat what with a fork?",
      answer: "Fried chicken",
    },

    {
      question: "Who invented the word 'vomit'?",
      answer: "William Shakespeare",
    },
  ],
};
export default {
  questions,
  random: () => {
    const random =
      questions.list[Math.floor(Math.random() * questions.list.length)];
    return <Question question={random.question} answer={random.answer} />;
  },
  toString: () => {
    return "Question";
  },
};
