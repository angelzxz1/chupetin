import {
  Box,
  Flex,
  Heading,
  Button,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
const QuestionModal = ({ showModal, setShowModal }) => {
  return (
    <Flex
      w="100%"
      h="r.v.14"
      position="fixed"
      top={14}
      left="0"
      zIndex="100"
      justifyContent="center"
      alignItems="center"
      display={showModal ? "flex" : "none"}
      bg="rgba(0,0,0,0.3)"
    >
      <Grid
        w="500px"
        h="500px"
        borderRadius="10px"
        boxShadow="0 0 10px 0 rgba(0,0,0,0.2)"
        p="20px"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Heading mb="20px">Question</Heading>

        <Button
          onClick={() => {
            setShowModal(false);
          }}
          colorScheme="green"
        >
          Yes
        </Button>
        <Button>No</Button>
      </Grid>
    </Flex>
  );
};

const Main = () => {
  const [fullH, setFullH] = useState("calc(100vh - 3.5rem)");
  const [showModal, setShowModal] = useState(false);
  return (
    <Flex fontFamily="roboto" direction="column">
      <Flex
        // ref={elementRef}
        h={fullH}
        justify="center"
        align="center"
        transition="all 0.5s ease-in-out"
        bg="purple.200"
      >
        <Button
          onClick={() => {
            setFullH("20");
            setShowModal(true);
          }}
        >
          Start
        </Button>
        <QuestionModal showModal={showModal} setShowModal={setShowModal} />
      </Flex>
    </Flex>
  );
};

export default Main;
