import { Button, Flex, Heading, Image, Container, background, Hide, useMediaQuery } from '@chakra-ui/react'
import React, { Children } from 'react'
import logo from '../media/bonfire-logo-light.png'
import searchicon from "../media/search button.png"
import shoppingcart from "../media/shoppingcart.png"
import shoppingcartblack from "../media/shoppingcartblack.png"
import { useLocation, useNavigate } from 'react-router-dom'
import { Link as ReactRouterLink} from 'react-router-dom'
import hamburger from "../media/icons/hamburger.png"
import { useBreakpointValue } from '@chakra-ui/react'

const Content = () => {
    const location = useLocation()
    const { hash, pathname, search } = location // deconstruct location properties to use
    const [isMobile] = useMediaQuery([`(max-width: 700px)`])
    console.log(pathname.split('/')[1])
    return (<>{!isMobile ? <> 
    <Button as={ReactRouterLink} to="home" h="100%" variant="ghost" colorScheme="bleh">  
        <Image src={logo} h="80%"/>
    </Button>     
    <Flex gap={{lg: "0.3vw", xl: "1vw"}}>
        {navNames.map((item, index) =>
            <Button as={ReactRouterLink} key={index} to={`/${item}`} size={{base: 'lg', xxxl: 'xl'}} variant="ghost" backgroundColor={item === pathname.split('/')[1] && "bg.500"} colorScheme='bg' _hover={{ backgroundColor: "bg.600"}}>
                <Heading fontWeight="100" fontSize={{xl: "1.5rem", xxxl: "2rem"}} color="white">{item.toUpperCase()}</Heading>
            </Button>
        )}
    </Flex>
    <Flex h="100%" align="center" gap="0.5vw">
        <Button height="70%" colorScheme='bg'><Image h="60%" src={searchicon}/></Button>
        <Button height="70%" backgroundColor="white"><Image h="60%" src={shoppingcartblack}/></Button>
    </Flex></> 
    
    :
    
    <> {/* THIS IS THE MOBILE PART OK?? */}    

    <Button colorScheme='darkgray' variant="nothing"><Image src={hamburger} /></Button>
    <Image src={logo} h="70%"/>
    <Flex h="100%" align="center" gap="0.5vw">
        <Button height="70%" variant="ghost" colorScheme='nothing'><Image h="60%" src={shoppingcart}/></Button>
    </Flex>
    
    </>
    
    }</>)
}

const navNames = ["home" , "build", "repair"]

export default function Header2() {

  return (
      <Flex justify="space-between" align="center" height={{ base:"25vw", xl:"7vw", xxl:"6vw", xxxl: "4vw"}} bgColor="bg.400" px="3vw" position="sticky" top="0" zIndex="3" sx={{ boxShadow: "0px 2px 4px #000000" }}>
        <Content />
      </Flex>
  )
}
