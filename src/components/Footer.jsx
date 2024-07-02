import { Flex, Grid, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import facebook from "../media/icons/facebook.png"
import tiktok from "../media/icons/tiktok.png"
import x from "../media/icons/x.png"
import youtube from "../media/icons/youtube.png"
import instagram from "../media/icons/instagram.png"
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <Flex bgGradient="linear(to-t, highlight.200, bg.300)" w="100%" flexDir="column" alignItems="center" gap={{base:"6vw", lg:"2vw"}} p="5vh">
        <Flex maxH="60px" justifyContent="center" columnGap="20px" maxWidth="500px">
            <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUccmljayBhc3RsZXkgbmV2ZXIgZ29ubmEgc3RvcA%3D%3D'><Image src={facebook} height="100%"/></Link>
            <Link href='https://www.tiktok.com/@bonfire.pc'><Image src={tiktok} height="100%"/></Link>
            <Link href='https://twitter.com/bonfire_pcs'><Image src={x}  height="100%" /></Link>
            <Link href='https://www.youtube.com/@Bonfire_PCs'><Image src={youtube} height="100%"/></Link>
            <Link href='https://www.instagram.com/bonfire.computers/' ><Image src={instagram} height="100%"/></Link>
        </Flex>
        <Flex w="100%" justifyContent="center" gap="2vw" color="gray.300" fontSize={{base: "0.8rem", lg:"1rem"}}>
            <NavLink> Home </NavLink>
            <NavLink> About </NavLink>
            <NavLink> Desktops </NavLink>
            <NavLink> Build </NavLink>
            <NavLink> Repairs </NavLink>
            <NavLink> Contact Us </NavLink>
        </Flex>
        <Text color="gray.400" fontSize={{base: "0.8rem"}}> © 2024 Bonfire Computers, Inc. All Rights Reserved </Text>
    </Flex>
  )
}
