import { Box, Divider, Flex, Grid, Heading, Image, MenuGroup, Text, Button, Link } from '@chakra-ui/react'
import React, { useRef } from 'react'
import builder from '../media/builder.png'
import ContactCard from '../components/ContactCard'
import chatbubble from '../media/icons/chatbubble.png'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { Link as ScrollLink } from 'react-scroll'
import comingsoon from '../media/coming soon.png'
import { Helmet } from 'react-helmet'

export default function Build() {
    const tawkMessengerRef = useRef()

    const handleMaximize = () => {
      tawkMessengerRef.current.maximize()
    }

  return (
    <>
        <Helmet>
            <title>Build - Bonfire</title>
        </Helmet>
        <Grid templateColumns="1.2fr 1fr" p="2vw" bgGradient='linear(to-r, #5B0055, #500000)'>
            <Image src={builder} />
            <Flex flexDir="column" gap="4vh" marginTop="3vh" px="2vw">
                <Heading fontSize={{lg:"5rem", xxxl:"7rem"}} px="3vw" color="white"> build your dream pc in 15 minutes. </Heading>
                <Divider borderWidth="1px"/>
                <Text px="2vw" color="white" fontSize={{lg:"1.5rem", xxxl:"2.2rem"}}>
                Bonfire's intuitive PC Builder makes it easy to design, customize and build your dream PC in 15 minutes without lifting a finger. We guarantee the cheapest prices possible, and if you find it cheaper, we'll beat it.
                <br /> <br />
                It doesn't matter if you're a beginner or expert, our AI Assistant makes things easy. 
                <Link color="red"> <ScrollLink to="contact-section"
        color="red"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500} > Click here to get started. </ScrollLink> </Link> </Text>
            </Flex>
        </Grid>
        <Flex bgColor="bg.350" sx={{ boxShadow: "0px 2px 4px #000000", zIndex: "3"}} py="5vh" px="2vw" color="white" id="contact-section">
            <Box width="60%" gap="1vh">
                <Heading fontFamily="cocogoose" fontSize={{xl: "4rem", xxxl: "5.5rem"}}> ready to get started? </Heading>
                <Text fontFamily="poppins" fontSize={{xl: "1.2rem", xxxl: "1.6rem"}}> Our online builder is <Image display="inline-block" src={comingsoon} h="1em" />, <b> but </b> you can easily get a custom computer built quickly and easily by sending our expert staff a message below.  </Text>
                <Button marginTop="1vw" colorScheme="highlight" gap="10px" onClick={handleMaximize} size={{xl: 'md', xxxl: "xl"}}> <Image src={chatbubble} h="80%"/> <Text> Start a chat </Text></Button>
                <Flex align="center" marginTop="1vw" gap="1vw" marginBottom="1vh">
                    <Text fontSize={{xl: "1.5rem", xxl: "2rem"}}> OR </Text> <Divider/>
                </Flex>
                <ContactCard page="/landing"/>
            </Box>
        </Flex>
        <TawkMessengerReact propertyId="65c3674a0ff6374032ca3c01" widgetId="1hm1kmv9s" ref={tawkMessengerRef}/>
    </>
  )
}
