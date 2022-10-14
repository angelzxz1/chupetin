import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const color = useColorModeValue("black", "whiteAlpha.900");

  const sameAttr = {
    content: '""',
    position: "absolute",
    bottom: "12%",
    transition: "all 200ms ease",
    bg: color,
    h: "1px",
  };
  const LinkStyle = {
    p: 2,
    color: color,
    borderRadius: "md",
    position: "relative",

    _before: !active
      ? {
          left: "50%",
          w: 0,
          ...sameAttr,
        }
      : {
          left: 0,
          w: "100%",
          ...sameAttr,
        },
    _hover: !active
      ? {
          _before: {
            left: 0,
            w: "100%",
          },
        }
      : {},
  };
  return (
    <NextLink href={href} passHref>
      <Link {...LinkStyle}>{children}</Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={20}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          w={{ base: "full", md: "auto" }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/howtoplay" path={path}>
            How to Play
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/howtoplay" passHref>
                  <MenuItem as={Link}>How to play</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
