import { useEffect, useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";

import Logo from "./Logo";
import Cart from "./customer/Cart";

export const CUSTOMER_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Cart",
    href: "/cart",
  },
];

export const ADMIN_LINKS = [
  {
    label: "Home",
    href: "/admin",
  },
  {
    label: "Menu",
    href: "/admin/menu",
  },
  {
    label: "Messages",
    href: "/admin/messages",
  },
];
export default function Header({
  links,
  isAdminPage,
  cartItems = [],
  addToCart = () => {},
}) {
  const { isOpen, onToggle } = useDisclosure();
  const { isAuthenticated, buildLogoutUrl, buildAuthorizeUrl } = useAuth0();
  const [authUrl, setAuthUrl] = useState("");
  useEffect(() => {
    (async () => {
      setAuthUrl(
        await (isAuthenticated
          ? buildLogoutUrl({
              returnTo: window.location.origin,
            }) // this not to be waited
          : buildAuthorizeUrl({
              // this returns a promise
              audience: process.env.REACT_APP_AUDIENCE,
            }))
      );
    })();
  }, [isAuthenticated, buildLogoutUrl, buildAuthorizeUrl]); // when isAuthenticated changes logIn changes to logOut viseversa

  const itemCount = cartItems.reduce((acc, item) => {
    return acc + Number(item.quantity);
  }, 0);
  const cartIcon = !isAdminPage ? (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" onAnimationEnd={() => {}}>
          <BsCart3 className="animate" />
          {itemCount > 0 ? <sup>{itemCount}</sup> : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Cart addToCart={addToCart} cartItems={cartItems} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ) : null;
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 0, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            flex="0"
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start", sm: "center" }}
        >
          <Logo />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav links={links} />
          </Flex>
        </Flex>
        {isAdminPage ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={authUrl}
            >
              {isAuthenticated ? "Sign Out" : "Sign In"}
            </Button>
            {/* <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button> */}
          </Stack>
        ) : (
          cartIcon
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav links={links} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ links }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {links.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={RouteLink}
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      as={RouteLink}
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ links }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {links.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={RouteLink}
        // as={Link}
        to={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
