import React from 'react'
import { Flex, Card, Grid, GridItem, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import desktop from "../media/gaming pc1.png"
import cpuicon from "../media/icons/cpuicon.png"
import gpuicon from "../media/icons/gpuicon.png"
import powericon from "../media/icons/powericon.png"
import ramicon from "../media/icons/ramicon.png"
import storageicon from "../media/icons/storageicon.png"

export default function DealCard(props) {
  return (
    <Card bgColor="highlight.100" color="white" border="solid" borderColor="#3a1212" boxShadow="0px 1px 9px #6a0000" sx={(props.css)} display="inline-block">
        <Grid templateColumns="1.3fr 1fr 1fr" templateRows="repeat(5, 1fr) 1.5fr" h="29vh" w="25vw">
            <GridItem rowSpan={5} colSpan={1}>
                <Image src={desktop} h="100%"></Image>
            </GridItem>
            <GridItem rowSpan={5} colSpan={2} paddingRight="3%" paddingTop="5%">
                <Grid templateColumns="1fr 5fr" templateRows="repeat(5, 1fr)" h="100%" columnGap="15px" rowGap="5px" fontSize="0.85rem">
                    <Image src={cpuicon} h="90%" placeSelf="center"/>
                    <Flex align="center"><Text> {props.cpu ? props.cpu : "Intel Core i7 10-700k"} </Text></Flex>
                    <Image src={gpuicon} h="90%" placeSelf="center"/>
                    <Flex align="center"><Text> {props.gpu ? props.gpu : "Nvidia GeForce RTX 3070"} </Text></Flex>
                    <Image src={ramicon} h="90%" placeSelf="center"/>
                    <Flex align="center"><Text> {props.ram ? props.ram : "2x8GB DDR4"} </Text></Flex>
                    <Image src={storageicon} h="90%" placeSelf="center"/>
                    <Flex align="center"><Text> {props.storage ? props.storage : "2TB SSD, 4TB HDD"} </Text></Flex>
                    <Image src={powericon} h="90%" placeSelf="center"/>
                    <Flex align="center"><Text> {props.psu ? props.psu : "Coolermaster 600W"} </Text></Flex>
                </Grid>
            </GridItem>
            <GridItem colSpan={3}>
                <Flex align="center" h="100%" justify="space-between" px="3%">
                    <Text fontWeight="600" fontSize="1rem"> {props.title ? props.title : "Dell Alienware 1550 with RTX 3070"} </Text>
                    <Text fontSize="1.3rem" fontFamily="CocogooseBold" color="white" bgColor="highlight.500" border="solid" borderWidth="5px" borderColor="highlight.500" rounded="md" borderTopWidth="0px" borderBottomWidth="0px"> {props.price ? props.price : "$2,325"} </Text>
                </Flex>
            </GridItem>
        </Grid>
    </Card>
  )
}
