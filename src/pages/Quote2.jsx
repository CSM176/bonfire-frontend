import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Flex, Image, Text, Button, Box, Input, FormControl, Select, Textarea, VStack, Heading, Divider, Grid, Center, useToast, Icon, useMediaQuery } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import stockrepairimage from "../media/repair.png"
import { Link as ReactRouterLink } from "react-router-dom"
import imageicon from "../media/icons/imageicon.png"

const dropzoneStyles = {
  border: '2px dashed #ccc',
  borderColor: '#2b2b2b',
  borderRadius: '7px',
  padding: '20px',
  textAlign: 'center',
  width: '100%',
  cursor: 'pointer',
};

const ImageUpload2 = ({ repairimage }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [quoteText, setQuoteText] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quoteExists, setQuoteExists] = useState(true);
  const [quote, setQuote] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isMobile] = useMediaQuery([`(max-width: 700px)`]);

  useEffect(() => {
    const checkQuoteExistence = async () => {
      try {
        const response = await fetch(`https://admin.bonfirepcs.com/api/quotes/${id}`);
        if (!response.ok) {
          throw new Error('Quote does not exist');
        }
        const quoteData = await response.json();
        setQuote(quoteData);
        setQuoteExists(true);
      } catch (error) {
        console.error('Error checking quote existence:', error);
        setQuoteExists(false);
        navigate('/repair/quote-1');
      }
    };

    checkQuoteExistence();
  }, [id, navigate]);

  const onDrop = useCallback((acceptedFiles) => {
    const filesWithPreview = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );
    setSelectedFiles(prevFiles => [...prevFiles, ...filesWithPreview]);
  }, []);

  const removeFile = (file) => {
    setSelectedFiles(prevFiles => prevFiles.filter(f => f !== file));
    URL.revokeObjectURL(file.preview);
  };

  const handleQuoteChange = (event) => {
    setQuoteText(event.target.value);
  };

  const handleDeviceTypeChange = (event) => {
    setDeviceType(event.target.value);
  };

  const handleProblemDescriptionChange = (event) => {
    setProblemDescription(event.target.value);
  };

  const phoneissues = [ "Cracked/Damaged Screen",
    , "Other Damage"
    , "Not turning on"
    , "Software issues"
    , "Backup and Data Recovery"
    , "Malware and Virus Removal"
    , "Other"]

  const laptopissues = ["Cracked/Damage Screen",
    , "Keyboard/Trackpad Damage"
    , "Other Damage"
    , "Not turning on"
    , "Not running well"
    , "Software issues"
    , "Backup and Data Recovery"
    , "Malware and Virus Removal"
    , "Other"]

  const desktopissues = ["Damaged Parts",
    , "Keyboard/Trackpad Damage"
    , "Other Damage"
    , "Not turning on"
    , "Not running well"
    , "Software issues"
    , "Backup and Data Recovery"
    , "Malware and Virus Removal"
    , "Other"]

  const otherissues = ["Damage", "Software Issues", "Not turning on", "Other"]
  


  const handleUpload = async () => {
    if (selectedFiles.length === 0 || !deviceType || !problemDescription) {
      toast({
        title: "Error",
        description: "Please fill in all fields and select files.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    selectedFiles.forEach(file => formData.append('files', file));

    try {
      const uploadResponse = await fetch('https://admin.bonfirepcs.com/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Image upload failed');
      }

      const uploadData = await uploadResponse.json();
      const imageIds = uploadData.map(file => file.id);

      const quoteResponse = await fetch(`https://admin.bonfirepcs.com/api/quotes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            ProblemType: deviceType,
            ProblemDescription: problemDescription,
            DevicePhotos: imageIds,
          },
        }),
      });

      if (!quoteResponse.ok) {
        throw new Error('Quote update failed');
      }

      setIsLoading(false);
      navigate(`/repair/quote-3/${id}`);
    } catch (error) {
      console.error('Upload failed:', error);
      toast({
        title: "Error",
        description: "Failed to update quote. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpload();
  };

  if (!quoteExists) {
    return null;
  }

  return (
    <Box display="flex" minHeight={{lg:"100vh", base:"70vh"}} flexDir={{lg:"row", base:"column"}}>
    <Box flex={{ base: undefined, lg: "0.5" }} sx={isMobile ? {height: "20vh"} : {}} gap="2vh" position="relative" display="flex" flexDir="column" justifyContent="center" alignItems="center" bgImage={stockrepairimage} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" _before={{ content: '""', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, bgGradient: 'linear(to-t, rgba(29, 29, 29, 1), rgba(29, 29, 29, 0.6))' }}>
    { !isMobile ? <Text position="relative" fontSize={{lg: "6vw", base: "10vw"}} color="white" fontFamily="Cocogoose" lineHeight="6vw" textAlign="center">Start a Repair         </Text> : 
                <Heading position="relative" fontFamily="Cocogoose" color="white" fontSize={!isMobile ? quote ? (3 * (1 - (quote.data.attributes.DeviceName.length/100))) + "vw": "3vw" : quote ? (10 * (1 - (quote.data.attributes.DeviceName.length/100))) + "vw": "3vw"}> {quote && quote.data.attributes.DeviceName} Repair</Heading>
  }    </Box> 
    <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="bg.300" color="white" paddingX="2vw">
        { !isMobile ? <VStack mt="2vw">
          <Heading fontFamily="Cocogoose" fontSize={quote ? (3 * (1 - (quote.data.attributes.DeviceName.length/100))) + "vw": "3vw"}> {quote && quote.data.attributes.DeviceName} Repair</Heading>
          <Divider />
          <Text mb="8" fontSize="1.1rem" textAlign="center">
            Next, we'll just need some information about your problem.
          </Text>
        </VStack> :       <Text mb="8" fontSize="1.1rem" textAlign="center" w={{lg: "80%"}}> Next, we'll just need some information about your problem.
        </Text>
 }   
        <Flex flexDir="column" width="80%" as="form" onSubmit={handleSubmit}>
          <Flex width="100%" gap="2vh" mb="4" flexDir={{base:"column", lg:"row"}}>
            <Box flexDir="row" flex="1">
              <FormControl id="device-type" mb="4">
                <Select
                  variant="filled"
                  placeholder="Select problem type*"
                  bg="bg.400"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  onChange={handleDeviceTypeChange}
                  name="device-type"
                  value={deviceType}
                  required
                  sx={{
                    '> option': {
                      background: 'bg.400',
                    },
                  }}
                >
                  {quote ? (quote.data.attributes.DeviceType === "Phone" ? phoneissues.map((item, index) =>
                    <option value={item}>{item}</option>
                  ): (quote.data.attributes.DeviceType === "Laptop" ? laptopissues.map((item, index) =>
                    <option value={item}>{item}</option>): (quote.data.attributes.DeviceType === "Desktop" ? desktopissues.map((item, index) =>
                      <option value={item}>{item}</option>) : otherissues.map((item, index) =>
                        <option value={item}>{item}</option>) ))) : "go away"}
                </Select>
              </FormControl>
              <FormControl id="problem-description">
                <Textarea
                  minH="25vh"
                  type="text"
                  placeholder="Please describe your issue.*"
                  variant="filled"
                  bg="bg.400"
                  color="white"
                  name="problem-description"
                  value={problemDescription}
                  onChange={handleProblemDescriptionChange}
                  required
                />
              </FormControl>
            </Box>
            <Flex
              borderRadius="7px"
              flex="1"
              bg="bg.400"
              justifyContent="center"
              alignItems="center"
            >
              <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                {selectedFiles.length > 0 ? (
                  <Flex direction="column">
                    {selectedFiles.map((file, index) => (
                      <Flex key={index} alignItems="center" mt="2" overflow="scroll" flexDir="row" justifyContent="center" position="relative">
  <Image src={file.preview} alt="Preview" objectFit="cover" mr="2" w="80%" />
  <Button
    position="absolute"
    top="90%"
    transform="translateY(-50%)"
    size="sm"
    onClick={() => removeFile(file)}
  >
    Remove
  </Button>
</Flex>

                    ))}
                  </Flex>
                ) : (
                  <Flex flexDirection={{lg:"column", base:"row"}} h="100%" w="100%" alignItems="center">
                    <Image src={imageicon} w={{lg:"25%", base:"50%"}}/>
                    <Text color="bg.800" fontSize="0.9rem">Please upload at least 1 photo of the device.</Text>
                  </Flex>
                )}
              </div>
            </Flex>
          </Flex>
          <Center gap="1vw">
          <Button as={ReactRouterLink} to="/repair/quote-1" colorScheme="gray" bgColor="bg.600" color="white" size="lg" mt="4" type="submit">
              Back
            </Button>
            <Button colorScheme="red" bgColor="highlight.500" size="lg" mt="4" type="submit" isLoading={isLoading}>
              Next
            </Button>
          </Center>
        </Flex>
    </Box>
  </Box>
  );
};

export default ImageUpload2;
