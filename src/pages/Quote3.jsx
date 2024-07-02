import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Flex,
  Image,
  Text,
  Button,
  Box,
  Input,
  FormControl,
  Select,
  Textarea,
  VStack,
  Heading,
  Divider,
  Grid,
  Center,
  useToast,
  FormLabel,
  Checkbox,
  useMediaQuery,
} from '@chakra-ui/react';
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

const Quote3 = ({ repairimage }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [quoteText, setQuoteText] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [deviceBrand, setDeviceBrand] = useState('');
  const [year, setYear] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [postcode, setPostcode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quoteExists, setQuoteExists] = useState(true);
  const [quote, setQuote] = useState(null);
  const [built, setBuilt] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const [desktopDescription, setDesktopDescription] = useState('')
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
        navigate(`/repair/quote-2/${id}`);
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

  const handleBuiltbox = (event) => {
    setBuilt(event.target.checked)
    console.log(built)
  }

  const handleQuoteChange = (event) => {
    setQuoteText(event.target.value);
  };

  const handleDeviceTypeChange = (event) => {
    setDeviceType(event.target.value);
  };

  const handleDesktopDescriptionChange = (event) => {
    setDesktopDescription(event.target.value);
  };

  const handleDeviceModelChange = (event) => {
    setDeviceModel(event.target.value);
  };

  const handleDeviceBrandChange = (event) => {
    setDeviceBrand(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSerialNumberChange = (event) => {
    setSerialNumber(event.target.value);
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const phoneIssues = ["Cracked/Damaged Screen", "Other damage", "Not turning on", "Software issues", "Backup and Data Recovery", "Malware and Virus Removal", "Other"];

  const laptopIssues = ["Cracked/Damage Screen", "Keyboard/Trackpad Damage", "Other Damage", "Not turning on", "Not running well", "Software issues", "Backup and Data Recovery", "Malware and Virus Removal", "Other"];

  const desktopIssues = ["Damaged Parts", "Keyboard/Trackpad Damage", "Other Damage", "Not turning on", "Not running well", "Software issues", "Backup and Data Recovery", "Malware and Virus Removal", "Other"];

  const otherIssues = ["Damage", "Software Issues", "Not turning on", "Other"];

  const handleUpload = async () => {


    setIsLoading(true);
    const formData = new FormData();

    try {


      const quoteResponse = await fetch(`https://admin.bonfirepcs.com/api/quotes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            DesktopDescription: desktopDescription,
            DeviceModel: deviceModel,
            DeviceBrand: deviceBrand,
            Year: year,
            SerialNumber: serialNumber,
            Postcode: postcode,
          },
        }),
      });

      if (!quoteResponse.ok) {
        throw new Error('Quote update failed');
      }

      setIsLoading(false);
      navigate(`/repair/quote-submit/${id}`);
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
  }
    </Box> 
    <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="bg.300" color="white" paddingX="2vw">
        { !isMobile ? <VStack mt="2vw">
          <Heading fontFamily="Cocogoose" fontSize={quote ? (3 * (1 - (quote.data.attributes.DeviceName.length/100))) + "vw": "3vw"}> {quote && quote.data.attributes.DeviceName} Repair</Heading>
          <Divider />
          <Text mb="8" fontSize="1.1rem" textAlign="center">
          Lastly, we'll just need a few other details.
          </Text>
        </VStack> :       <Text mb="8" fontSize="1.1rem" textAlign="center" w={{lg: "80%"}}> Lastly, we'll just need a few other details.
        </Text>
 }   
                <Flex flexDir="column" width="90%" as="form" onSubmit={handleSubmit}>
          <Box width="100%" gap="1vw" mb="4">
            {quote && quote.data.attributes.DeviceType === "Desktop" && <FormControl mb="1vw">
              <Checkbox onChange={handleBuiltbox}>I built my PC.</Checkbox>
            </FormControl>}
            {!built && 
            <>
            <Flex flexDir={{base:"column", lg:"row"}} width="100%" gap="1vw" mb="4">
              <FormControl id="device-model">
                <Input
                  type="text"
                  placeholder="Device Model*"
                  variant="filled"
                  bg="bg.400"
                  color="white"
                  name="device-model"
                  value={deviceModel}
                  onChange={handleDeviceModelChange}
                  required
                />
                <FormLabel color="bg.700"fontSize={{lg:"0.7vw", base:"3vw"}}>The specific model of your device, e.g {quote && (quote.data.attributes.DeviceType === "Laptop" ? "Dell Inspiron 1510, Macbook Air 2020" : quote.data.attributes.DeviceType === "Desktop" ? "Dell XPS 1550, HP Workstation 201" : quote.data.attributes.DeviceType === "Phone" ? "iPhone 15 Pro, Galaxy S23 Ultra" : "HP Inkjet 1550, iPhone 14 Pro Max")}</FormLabel>
              </FormControl>
              <FormControl id="device-brand">
                <Input
                  type="text"
                  placeholder="Device Brand*"
                  variant="filled"
                  bg="bg.400"
                  color="white"
                  name="device-brand"
                  value={deviceBrand}
                  onChange={handleDeviceBrandChange}
                  required
                />
                </FormControl>
            </Flex>
            <Flex flexDir={{base:"column", lg:"row"}} width="100%" gap="1vw">
              <FormControl color="bg.700" id="year">
                <Input
                  type="text"
                  placeholder="Year"
                  variant="filled"
                  bg="bg.400"
                  color="white"
                  name="year"
                  value={year}
                  onChange={handleYearChange}
                
                />
                <FormLabel fontSize={{lg:"0.7vw", base:"3vw"}}>The year the device was made.</FormLabel>
              </FormControl>
              <FormControl id="serial-number" mb="4">
                <Input
                  type="text"
                  placeholder="Serial Number (if you have it)"
                  variant="filled"
                  bg="bg.400"
                  color="white"
                  name="serial-number"
                  value={serialNumber}
                  onChange={handleSerialNumberChange}
                />
              </FormControl>
              </Flex>
              </>
}
{built && <FormControl id="desktop-description" mb="4">
                <Textarea
                  minH="25vh"
                  type="text"
                  placeholder="Please list your computer specifications. e.g RTX 3060, 16 GB 3200mhz RAM, 1TB SSD, i7-10700k, ASUS Wifi II Motherboard"
                  variant="filled"
                  bg="bg.400"
                  color="white"
                  name="desktop-description"
                  value={desktopDescription}
                  onChange={handleDesktopDescriptionChange}
                
                />
              </FormControl>
}
              <FormControl id="postcode" mb="4">
                <Input
                  type="text"
                  placeholder="Postcode"
                  variant="filled"
                  bg="bg.400"
                  color="white"
                  name="postcode"
                  value={postcode}
                  onChange={handlePostcodeChange}
                />
                <FormLabel color="bg.700" fontSize="0.7vw">This is just for delivery and pickup.</FormLabel>
              </FormControl>
            </Box>
         
          <Center gap="1vw">
            <Button as={ReactRouterLink} to={`/repair/quote-2/${id}`} colorScheme="gray" bgColor="bg.600" color="white" size="lg" mt="4" type="submit">
              Back
            </Button>
            <Button colorScheme="red" bgColor="highlight.500" size="lg" mt="4" type="submit" isLoading={isLoading}>
              Get Quote
            </Button>
          </Center>
        </Flex>
    </Box>
  </Box>
  );
};

export default Quote3;

