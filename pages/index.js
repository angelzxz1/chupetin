import {
  Box,
  Flex,
  Heading,
  Button,
  Grid,
  useColorModeValue,
  IconButton,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import QuestionModal from "../components/modal";
import { CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import game from "../libs/game";

const Main = () => {
  const [fullH, setFullH] = useState("calc(100vh - 3.5rem)");
  const [showModal, setShowModal] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex fontFamily="roboto" direction="column">
      <Flex
        // ref={elementRef}
        h={fullH}
        justify="center"
        align="center"
        transition="height 0.5s ease-in-out"
        // bg="purple.200"
      >
        <Button
          onClick={() => {
            setFullH("20");
            setTimeout(() => {
              setShowModal(true);
              onToggle();
            }, 500);
          }}
        >
          Start
        </Button>
        {showModal ? (
          <ScaleFade initialScale={1} in={isOpen}>
            <QuestionModal
              onToggle={onToggle}
              setShowModal={setShowModal}
              setFullH={setFullH}
            />
          </ScaleFade>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

Main.tittle = "Home";

export default Main;
