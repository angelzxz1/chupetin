import {
  Flex,
  Grid,
  useColorModeValue,
  Heading,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import game from "../libs/game";

const QuestionModal = ({ onToggle, setShowModal, setFullH }) => {
  const [content, setContent] = useState({
    Title: "",
    Body: "",
    Penaltie: "",
  });

  const randomProperty = (obj) => {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  };

  const setInfo = () => {
    const info = randomProperty(game.core);
    if (info.toString() !== "Rule") {
      setContent({
        Title: info.toString(),
        Body: info.random(),
        Penaltie: game.penaltie.randomPenaltieGeneral(),
      });
    } else {
      setContent({
        Title: info.toString(),
        Body: info.random(),
        Penaltie: game.penaltie.randomPenaltieRules(),
      });
    }
  };

  useEffect(() => {
    setInfo();
  }, []);

  return (
    <Flex
      w="100%"
      h="r.v.14"
      position="fixed"
      top={14}
      left="0"
      zIndex="9"
      justifyContent="center"
      alignItems="center"
      // display={showModal ? "flex" : "none"}
      bg="rgba(0,0,0,0.3)"
    >
      <Grid
        w="500px"
        h="500px"
        borderRadius="10px"
        boxShadow="0 0 10px 0 rgba(0,0,0,0.2)"
        p="20px"
        bg={useColorModeValue("white", "gray.800")}
        templateColumns="1fr"
        templateRows="1fr 5fr"
        templateAreas={'"banner" "boddy"'}
      >
        <Grid
          gridArea="banner"
          templateAreas={`"h c"`}
          templateColumns="7fr 1fr"
          borderBottom="1px"
          borderColor="purple.200"
        >
          <Heading mb="20px" gridArea="h">
            {content.Title}
          </Heading>
          <IconButton
            icon={<CloseIcon />}
            colorScheme="red"
            gridArea="c"
            onClick={() => {
              onToggle();
              setFullH("calc(100vh - 3.5rem)");
              setShowModal(false);
            }}
          />
        </Grid>
        <Grid
          gridArea="boddy"
          templateAreas={`"boddy" "penaltie"`}
          templateRows={`3fr 1fr`}
          templateColumns={`1fr`}
        >
          <Flex
            justify="space-around"
            aligns="center"
            fontSize={30}
            direction="column"
            gridArea="boddy"
            // bg="purple.600"
          >
            {content.Body}
          </Flex>
          <Flex
            justify="center"
            align="center"
            fontSize={30}
            direction="column"
            gridArea="penaltie"
            borderTop="1px"
            borderColor="purple.200"
          >
            {content.Penaltie}
          </Flex>
        </Grid>
        <Grid>
          <Button
            onClick={() => {
              setInfo();
            }}
            colorScheme="green"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Flex>
  );
};

export default QuestionModal;
