import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Heading, Flex, Card, Grid, GridItem, Text, Divider, Center } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import introimg from "../media/intro.png"
import { Container } from "@chakra-ui/react";
import laptopicon from "../media/icons/laptop.png"
import desktopicon from "../media/icons/desktop.png"
import phoneicon from "../media/icons/phone.png"
import DealCard from "../components/DealCard";
import builder from "../media/builder.png"

export default function Home() {
    
  return (
    <>
        <Box backgroundColor="bg.300">
            <Box sx={{ boxShadow: "0px 2px 4px #000000", zIndex: "3"}}>
                <Carousel showStatus={false} showArrows={false} showThumbs={false} width="100%">
                    <div>
                        <Image src={introimg}/>
                    </div>
                    <div>
                        <Image src={introimg} />
                    </div>
                    <div>
                        <Image src={introimg} />
                    </div>
                </Carousel>
            </Box>
            <Box paddingBottom="2vh">
                <Heading color="white" fontFamily="Cocogoose" fontWeight="400" fontSize="100px" marginTop="-10px" marginLeft="3vw"> deals </Heading>
                <Box overflowX="auto" width="auto" sx={{ whiteSpace: 'nowrap' }} marginBottom="2vh">
                    {Array.from({ length: 10}).map((_, index) => (
                        <DealCard price="$3,200" key={index} css={{ marginLeft: "2vw" }}/>
                    ))}
                </Box>
                <Box overflowX="auto" width="auto" sx={{ whiteSpace: 'nowrap' }} dir="rtl" marginRight="2vw">
                        {Array.from({ length: 10}).map((_, index) => (
                            <DealCard price="$3,200" key={index} css={{ marginLeft: "2vw", direction: "ltr" }}/>
                        ))}
                </Box>
            </Box>
        </Box>
        <Grid bgColor='bg.200' paddingY="4vh" gap={0} templateColumns="4fr 1fr 7.5fr 3fr">
            <Heading color="white" fontSize="10vh" fontFamily="Cocogoose" fontWeight="400" marginLeft="2vw"> looking for repairs? </Heading>
            <Divider orientation="vertical" h="100%"></Divider>
            <Text fontSize="1.8rem" color="white" fontWeight="400" fontFamily="Cocogoose" placeSelf="center"> <Text as="span" fontWeight="600" fontSize="1.3em"> low cost and easy. </Text> We guarantee cheapest fees in the area and will price match on request. We make it easy to repair anything, mobile, PC or laptop, and if we don't fix your problem, there's no fee. Set up a drop off or a pick up today.</Text>
            <Grid templateRows="1fr 1fr 1fr" templateColumns="1fr" gap={0} h="40vh" w="100%">
                <Image src={laptopicon} maxH="100%" objectFit="cover" placeSelf="center" />
                <Image src={desktopicon} maxH="100%" objectFit="cover" placeSelf="center"/>
                <Image src={phoneicon} maxH="100%" objectFit="cover" placeSelf="center"/>
            </Grid>
        </Grid>
        <Grid templateColumns="5fr 4fr" templateRows="2fr 1 fr 2fr" backgroundColor="bg.400" paddingY="5vh" paddingX="2vw" columnGap="3vw" color="white">
            <GridItem rowSpan={3}>
                <Image src={builder}/>
            </GridItem>
            <GridItem paddingTop="2vw">
                <Heading color="white" fontFamily="Cocogoose" fontWeight="400" fontSize="4.6vw" textAlign="center">
                    build a pc without <br></br> lifting a finger.
                </Heading>
            </GridItem>
            <Center paddingY="2vw">
                <Divider w="100%"></Divider>
            </Center>
            <Text fontSize="1.8rem">
                <Heading fontFamily="Cocogoose" fontSize="2rem">
                    for experts and beginners. 
                </Heading>
                Customise every aspect about your PC, and get it built by professionals. Use our AI assistant to build your perfect computer with no experience at all. Don't waste your time fiddling with parts, <Text as="span"> build your perfect pc in 15 minutes today. </Text>
            </Text>
        </Grid>
        
    </>
  )
}
