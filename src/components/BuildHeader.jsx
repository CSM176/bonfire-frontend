import React from 'react'
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'

export default function BuildHeader() {
  return (
    <div>        
    <Flex alignItems="center" width="100vw" paddingTop="2vh" flexDir="column" gap="0.vh" bgGradient='linear(to-b, #500000, bg.300)' color="white">
        <Grid templateColumns="1fr 3fr 1fr" w="70vw" gap="1vw">
            <Box>
                <Text color="bg.1000" marginLeft="0.3vw">budget</Text>
                <Box marginTop="-0.3em" backgroundColor="bg.400" justifyContent="center" padding="1vh" borderRadius="5px" border="solid" borderColor="bg.800">
                    <Heading textAlign="center" fontSize="1.7rem"> $920 </Heading>
                </Box>
            </Box>
            <Box>
                <Text color="bg.1000" marginLeft="0.3vw">name</Text>
                <Box marginTop="-0.3em" backgroundColor="bg.400" justifyContent="center" padding="1vh" borderRadius="5px" border="solid" borderColor="bg.800">
                    <Heading textAlign="center" fontSize="1.7rem"> $920 </Heading>
                </Box>
            </Box>
            <Box>
                <Text color="bg.1000" marginLeft="0.3vw">current price</Text>
                <Box marginTop="-0.3em" backgroundColor="bg.400" justifyContent="center" padding="1vh" borderRadius="5px" border="solid" borderColor="bg.800">
                    <Heading textAlign="center" fontSize="1.7rem"> $920 </Heading>
                </Box>
            </Box>
        </Grid>
        <Box>
            <Text color="bg.1000" marginLeft="0.3vw">assistant</Text>
            <Box marginTop="-0.3em" width="50vw"backgroundColor="bg.400" justifyContent="center" padding="1vh" borderRadius="5px" border="solid" borderColor="bg.800">
                <Text align="center" fontSize="1.2rem"> Your setup looks great so far. </Text>
            </Box>
        </Box>
    </Flex>
    </div>
  )
}
