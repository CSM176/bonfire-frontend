import React, { useRef } from 'react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Heading, Flex, Card, Grid, GridItem, Text, Divider, Center, Link, Button, FormControl, Input, Show, Hide } from "@chakra-ui/react"
import { Link as ScrollLink } from 'react-scroll'
import { Image } from "@chakra-ui/react"
import ContactCard from './ContactCard'
import chatbubble from '../media/icons/chatbubble.png'
import laptopicon from "../media/icons/laptop.png"
import desktopicon from "../media/icons/desktop.png"
import phoneicon from "../media/icons/phone.png"
import hammer from "../media/icons/hammer.png"
import { useBreakpointValue } from '@chakra-ui/react'
import { Link as ReactRouterLink} from 'react-router-dom'

// parameters: Subtitle, Bait, Linktext, Linkto, Title, Titleimg, Scrolllinkto, Button, Orientation, show divider

export default function InfoCard(props) {
  const orient = useBreakpointValue({base: "horizontal", lg: "vertical"})
  const scrollToPosition = () => {
    const targetElementId = props.scrolllinkto
    const targetElement = document.getElementById(targetElementId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Flex backgroundColor={props.bg} p="4vh" paddingX={{lg:"20vw"}} gap={{base: "3.5vh",lg:"2vw"}} flexDir={{base: "column-reverse", lg:props.orientation ? props.orientation : "row"}}>
        { props.images && 
        <Grid templateColumns={{base:('repeat(' + props.images.length + ', 1fr)'), lg:"1fr"}} maxH={{base:"15vh", xl:"35vh", xxl:"30vh"}} maxW={{base: "100vw", xl:"10vw"}}>
            {props.images.map((image, index) =>
            <Image src={image} maxH="80%" maxW={{base:100/(props.images.length-10) + "vw", lg:"10vw"}} objectFit="cover" placeSelf="center" /> 
            )}
        </Grid> }
        <Show below='lg'>{props.button && <Button colorScheme='bg' onClick={ props.scrolllinkto && scrollToPosition} as={ !props.scrolllinkto && ReactRouterLink} to={props.linkto}> {props.button} </Button>}</Show>
        <Text fontSize={{xl:"1.5rem", xxxl: "1.8rem"}} color="white" fontWeight="400" fontFamily="Cocogoose" placeSelf="center" textAlign={{base:"center", lg:"left"}}> <Text as="span" fontWeight="600" fontSize={{lg:"1.3em"}}> {props.subtitle} </Text> {props.children} {props.bait} <Show above='lg'> {props.scrolllinkto ? <Link color="red"> <ScrollLink to={props.scrolllinkto}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}> {props.linktext}  </ScrollLink> </Link> : <Link as={ReactRouterLink} color="red" to={props.linkto}>{props.linktext}</Link> } </Show>   </Text>
        <Show above='lg'>
        <Flex>
          <Divider display="inline" orientation={orient} placeSelf="center" h="100%" color="red"/>
        </Flex>
        </Show>
        { props.showDivider &&
        <Show below='lg'>
          <Flex>
            <Divider display="inline" orientation={orient} placeSelf="center" h="100%" color="red"/>
          </Flex>
        </Show>
        }
        <Heading color="white" maxW={{base:"100vw",lg:"20vw"}} fontSize={{base:"5vh", xl:"8vh", xxxl:"6vh"}} fontFamily="Cocogoose" fontWeight="400" maxH={{base: "15vh", xl:"30vh", xxxl:"25vh"}} alignContent="center" textAlign={{base:"center", lg:"left"}} placeSelf="center" > {props.title} <Show above='lg'>{props.titleimg && <Image display="inline" src={props.titleimg} height="20%"/>}</Show> </Heading>
    </Flex>

  )
}
