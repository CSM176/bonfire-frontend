import { Box, Center, Divider, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BuildHeader from '../components/BuildHeader'
import ExampleBuild from '../media/ExampleBuild.png'
import Clock from '../media/icons/Clock.png'
import LightningBolt from '../media/icons/LightningBolt.png'
import Video from '../media/icons/Video.png'
import Checkmark from '../media/icons/Checkmark.png'


export default function Builder() {
  return (
    <Box h="100vh" backgroundColor="bg.300">
        <BuildHeader />
        <Center>
            <Grid width="85vw" h="80vh" templateColumns="1.2fr 1fr 1.2fr" backgroundColor="bg.200" marginTop="3vh" color="white">
                <Grid templateRows="1fr 1fr 1fr">
                    <Flex flexDir="column" width="410px" alignItems="end">
                        <Flex justifyContent="space-between" w="100%" alignItems="end">
                            <Image src={Checkmark} h="28px" w="28px" marginBottom="-18px" zIndex="2"/>
                            <Heading marginRight="2rem" marginBottom="-0.6rem" zIndex="2">cpu</Heading>
                        </Flex>
                        <Flex h="175px" w="400px" border="solid" borderColor="green" borderRadius="1.2vh">
                            <Grid h="100%" w="100%" templateColumns="1.5fr 1px 1fr" backgroundColor="bg.400" borderRadius="1vh" border="solid" borderColor="bg.600">
                                <Flex py="1.5vh" flexDir="column" justifyContent="center" h="100%" gap="0.5vh">
                                    <GridItem paddingX="1vw" align="center">
                                        <Image display="inline" src={LightningBolt} marginRight="0.2rem"/>
                                        <Text display="inline" fontSize="0.8rem">120W</Text>
                                    </GridItem>
                                    <GridItem paddingX="1vw" align="center">
                                        <Image display="inline" src={Video} marginRight="0.2rem"/>
                                        <Text display="inline" fontSize="0.8rem" align="center">Radeon Graphics</Text>
                                    </GridItem>
                                    <GridItem paddingX="1vw" align="center">
                                        <Image display="inline" src={Clock} marginRight="0.2rem"/>
                                        <Text display="inline" fontSize="0.8rem" align="center">8 Cores, 4.2GHz</Text>
                                    </GridItem>
                                    <Flex bgGradient="linear(to-l, highlight.100, bg.400)'" fontFamily="CocogooseBold" justifyContent="center" marginY="0.5vh">
                                        <Center><Text align="center" fontSize="1.5rem">$68</Text></Center>
                                    </Flex>
                                    <GridItem paddingX="1vw">
                                        <Text align="center" fontFamily="CocogooseBold" fontSize="1.2rem">AMD Ryzen 8 7800X3D</Text>
                                    </GridItem>
                                </Flex>
                                <Divider orientation='vertical' height="90%" placeSelf="center" borderWidth="1px"></Divider>
                                <Flex bgGradient='linear(to-l, highlight.100, bg.400)' maxH="163px" borderRadius="5px">
                                    <Image src={ExampleBuild} placeSelf="center" p="1vh"/>
                                </Flex>
                            </Grid>
                        </Flex>
                        <Flex position="relative" marginRight="-117px" alignItems="center" marginTop="-30px">
                            <Divider w="100px" borderWidth="2px" borderColor="green"/>
                            <Box w="15px" h="15px" backgroundColor="white" borderRadius="100px" border="solid" borderColor="#158B00"></Box>
                        </Flex>
                    </Flex>
                    
                </Grid>    
                <Center><Image src={ExampleBuild} w="90%"></Image></Center>
            </Grid>
        </Center>
    </Box>
  )
}
