import {
  Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Heading, Flex, Card, Grid,
  GridItem, Text, Divider, Center, Link, Button, FormControl, Input, Show, Hide,
  AbsoluteCenter, VStack, useMediaQuery, Image, Container
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import introimg from "../media/landing.png";
import { useEffect, useRef, useState } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Link as ScrollLink } from "react-scroll";
import Helmet from "react-helmet";
import mobileintro from "../media/mobile intro.png";
import InfoCard from "../components/InfoCard";
import crackedphone from "../media/crackedphone.png";
import devices from "../media/icons/devices.png";
import devicessideways from "../media/icons/devicessideways.png";
import websitecomingsoon from "../media/websitecomingsoon.png";
import { Link as ReactRouterLink } from "react-router-dom";
import laptopicon from "../media/icons/laptop.png";
import desktopicon from "../media/icons/desktop.png";
import phoneicon from "../media/icons/phone.png";
import DealCard from "../components/DealCard";
import builder from "../media/builder.png";
import hammer from "../media/icons/hammer.png";
import chatbubble from "../media/icons/chatbubble.png";
import ContactCard from "../components/ContactCard";

const slides = ["", "", ""];

const deviceicons = [laptopicon, desktopicon, phoneicon];

export default function Home() {
  const tawkMessengerRef = useRef();
  const [isMobile] = useMediaQuery([`(max-width: 700px)`]);

  const handleMaximize = () => { tawkMessengerRef.current.maximize(); };

  const phoneImageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const updateImageHeight = () => {
      if (phoneImageRef.current) {
        setImageHeight(phoneImageRef.current.clientHeight * 0.8);
      }
    };
    // Initial call to set image height
    updateImageHeight();
    // Listen to window resize events
    window.addEventListener("resize", updateImageHeight);
    return () => {
      window.removeEventListener("resize", updateImageHeight);
    };
  }, []);

  const openTawkToChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <>
      <Helmet>
        <title>Home - Bonfire</title>
      </Helmet>
      <Box backgroundColor="bg.300">
        <Box sx={{ boxShadow: "0px 2px 4px #000000", zIndex: "3" }}>
          <Carousel showStatus={false} showArrows={false} showThumbs={false} width="100%">
            {slides.map((index, thingy) => (
              <>
                <Hide above="sm"> <Image alt="Based in the Macedon Ranges, we provide computer repairs and custom computer builds for anyone, beginnner or expert. We guarantee the cheapest prices possible, and will beat any competitor price. We service the macedon ranges, including Kyenton, Macedon, Woodend, Gisborne, Riddells Creek, Lancefield, and even Sunbury!" src={mobileintro} /> </Hide>
                <Show above="sm"> <Image alt="Based in the Macedon Ranges, we provide computer repairs and custom computer builds for anyone, beginnner or expert. We guarantee the cheapest prices possible, and will beat any competitor price We service the macedon ranges, including Kyenton, Macedon, Woodend, Gisborne, Riddells Creek, Lancefield, and even Sunbury!" src={introimg} /> </Show>
              </>
            ))}
          </Carousel>
        </Box>
      </Box>
      {!isMobile ? (
        <>
          <Flex direction={{ base: "column", md: "row" }} bg="bg.200" color="white" align="center" zIndex="1" paddingRight="5vw" gap="5vw">
            <Box w="30%" overflow="hidden" position="relative">
              <Image ref={phoneImageRef} minH="5vw" maxH="350px" width="100%" objectFit="cover" objectPosition="left" src={crackedphone} alt="Broken phone" />
              <Flex w="100%" h="100%" position="absolute" top="0px" justifyContent="end" alignItems="center" p="2vw">
                <Heading fontSize="2.8vw" color="white" zIndex="2" fontFamily="Cocogoose"> looking <br /> for <br /> repairs? </Heading>
              </Flex>
            </Box>
            <VStack align="flex-start" spacing={4} w={{ base: "100%", md: "40%" }}>
              <Heading fontSize="1.5vw">low cost and easy.</Heading>
              <Divider />
              <Text> From mobiles to laptops, we've got you covered. With a price beat guarantee, we'll fix it for the best price possible, and if we can't, you don't pay. Get a quote in minutes. </Text>
              <Button as={ReactRouterLink} to="/repair/quote-1" colorScheme="red" size="lg" backgroundColor="highlight.500"> Get a free quote now. </Button>
            </VStack>
            <VStack height={imageHeight} alignItems="center" justifyContent="center">
              <Image src={devices} height="100%" alt="Devices" />
            </VStack>
          </Flex>
          <Flex direction={{ base: "column", md: "row-reverse" }} bg="bg.300" color="white" align="center" zIndex="1" paddingLeft="5vw" gap="5vw">
            <Box w="30%" overflow="hidden" position="relative">
              <Image minH="15vw" maxH="350px" width="100%" objectFit="cover" objectPosition="left" src={websitecomingsoon} alt="Broken phone" />
              <Flex w="100%" h="100%" position="absolute" top="0px" justifyContent="start" alignItems="center" p="2vw">
                <Heading fontSize="2.8vw" color="white" zIndex="2" fontFamily="Cocogoose"> website <br /> coming <br /> soon. </Heading>
              </Flex>
            </Box>
            <VStack align="flex-start" spacing={4} w={{ base: "100%", md: "40%" }}>
              <Heading fontSize="1.5vw">pardon our dust</Heading>
              <Divider />
              <Text> We are currently developing our website to make custom builds, and repair requests, easy. We're still open for business, <Link color="red"> <ScrollLink to="contact-section" color="red" spy={true} smooth={true} offset={-70} duration={500}> so click here for sales or repairs! </ScrollLink> </Link> </Text>
            </VStack>
          </Flex>
        </>
      ) : (
        //  ------------------------------------------ MOBILE SECTION --------------------------------------------------------------------------------------------
        <>
          <Flex direction={{ base: "column", md: "row" }} bg="bg.200" color="white" align="center" zIndex="1" px="5vw" gap="5vw" py="5vh">
            <VStack align="flex-start" spacing={4} alignItems="center" w={{ base: "100%", md: "40%" }}>
              <Heading fontSize="3.5vh" color="white" zIndex="2" fontFamily="Cocogoose"> looking for repairs? </Heading>
              <Text textAlign="center"> Low cost and easy. From mobiles to laptops, we've got you covered. With a price beat guarantee, we'll fix it for the best price possible, and if we can't, you don't pay. Get a quote in minutes. </Text>
              <Button as={ReactRouterLink} to="/repair/quote-1" colorScheme="red" size="lg" backgroundColor="highlight.500"> Get a free quote now. </Button>
            </VStack>
            <Center>
              <Image src={devicessideways} w="80%" alt="Devices" />
            </Center>
          </Flex>
          <Flex direction={{ base: "column", md: "row-reverse" }} bg="bg.300" color="white" align="center" zIndex="1" gap="5vw"  px="5vw" py="5vh">
            <VStack align="flex-start" alignItems="center" spacing={4} w={{ base: "100%", md: "40%" }}>
              <Heading fontSize="3.5vh" color="white" zIndex="2" fontFamily="Cocogoose"> website coming soon. </Heading>
              <Divider w="80%" />
              <Text textAlign="center"> We are currently developing our website to make custom builds, and repair requests, easy. We're still open for business, <Link color="red"> <ScrollLink to="contact-section" color="red" spy={true} smooth={true} offset={-70} duration={500}> so click here for sales or repairs! </ScrollLink> </Link> </Text>
            </VStack>
          </Flex>
        </>
      )}
      <Flex bgColor="bg.350" sx={{ boxShadow: "0px 2px 4px #000000", zIndex: "3" }} py="3vh" px="2vw" color="white" id="contact-section" justifyContent="center">
        <Flex width={{ lg: "60%", base: "100%" }} gap="1vh" flexDir="column">
          <Heading fontFamily="cocogoose" textAlign={{ base: "center", lg: "left" }} fontSize={{ base: "2.5rem", xl: "4rem", xxxl: "5.5rem" }}> ready to get started? </Heading>
          <Text fontFamily="poppins" fontSize={{ xl: "1.2rem", xxxl: "1.6rem" }} textAlign={{ base: "center", lg: "left" }}> To get started with a repair or sale, or just a general enquiry, <Link as={ReactRouterLink} color="red" to="/repair/quote-1"> get a quote </Link> or tap the button to quickly start a chat with a staff member, or send us an email below. </Text>
          <Button marginTop="1vw" colorScheme="highlight" gap="10px" onClick={openTawkToChat} size={{ base: "md", xl: "md", xxxl: "xl" }} w="100%"> <Image src={chatbubble} h="80%" /> <Text> Start a chat </Text> </Button>
          <Flex align="center" marginTop="1vw" gap="1vw" marginBottom="1vh">
            <Show above="lg"> <Text fontSize={{ xl: "1.5rem", xxl: "2rem" }}> OR </Text> </Show>
            <Divider />
            <Hide above="lg"> OR <Divider /> </Hide>
          </Flex>
          <ContactCard page="/landing" />
        </Flex>
      </Flex>
    </>
  );
}
