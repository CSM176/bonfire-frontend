import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import fourzerofour from '../media/404.png'
import computeronfire from '../media/computeronfire.png'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { Helmet } from 'react-helmet'

export default function NotFound() {

  const openTawkToChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <>        
    <Helmet>
      <title>404 Not Found - Bonfire</title>
    </Helmet>
    <Flex backgroundImage={computeronfire} backgroundPosition="right" backgroundSize="110vw">
      <Flex flexDir="column" w="60vw" p="3vw" zIndex="2" h="90vh">
        <Image src={fourzerofour} height={{lg:"10rem", xxxl:"15rem"}} maxW={{lg:"23.33rem", xxxl:"34.96rem"}} />
        <Heading fontSize={{lg:"5rem", xxxl:"7rem"}} color="white"> page not <br /> found </Heading>
        <Text color="grey" fontSize={{lg:"1.6rem", xxxl:"2.2rem"}} py="2vh">
          Sorry, but the page "bonfirepcs.com/error/error404" doesn't exist on our website. Try visiting the home page or searching for the page, or alternatively, <Link color="highlight.500" onClick={openTawkToChat}> send us a message. </Link>
        </Text>
      </Flex>
    </Flex>
    </>
  )
}
