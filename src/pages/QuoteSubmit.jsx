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
  Link,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import stockrepairimage from "../media/repair.png";
import { Link as ReactRouterLink } from "react-router-dom";
import imageicon from "../media/icons/imageicon.png";


const dropzoneStyles = {
  border: '2px dashed #ccc',
  borderColor: '#2b2b2b',
  borderRadius: '7px',
  padding: '20px',
  textAlign: 'center',
  width: '100%',
  cursor: 'pointer',
};

const QuoteSubmitted = ({ repairimage }) => {
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
  const [desktopDescription, setDesktopDescription] = useState('');
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
        navigate('/navigate');
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
      navigate(`/repair/quote-${id}`);
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

  const openTawkToChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  if (!quoteExists) {
    return null;
  }

  return (
    <Box display="flex" minHeight={{ lg: "100vh", base: "70vh" }} flexDir={{ lg: "row", base: "column" }}>
      <Box flex={{ base: undefined, lg: "0.5" }} sx={isMobile ? { height: "20vh" } : {}} gap="2vh" position="relative" display="flex" flexDir="column" justifyContent="center" alignItems="center" bgImage={stockrepairimage} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" _before={{ content: '""', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, bgGradient: 'linear(to-t, rgba(29, 29, 29, 1), rgba(29, 29, 29, 0.6))' }}>
        {!isMobile ? <Text position="relative" fontSize={{ lg: "6vw", base: "10vw" }} color="white" fontFamily="Cocogoose" lineHeight="6vw" textAlign="center">Start a Repair</Text> :
          <Heading position="relative" fontFamily="Cocogoose" color="white" fontSize="5vh"> Quote Sent. </Heading>
        }
      </Box>
      <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="bg.300" color="white" paddingX="2vw">
        <VStack mt="2vw">
          {!isMobile && <Heading fontFamily="Cocogoose" fontSize="4vw" mb="4"> Quote Sent. </Heading>}
          <Text mb="8" fontSize="1.1rem" textAlign="center" w={{ lg: "60%", base: "80%" }}>
            Your request has been sent to our staff, and you should recieve a full quote within an hour. <br></br> <br></br> To change your request or visit the home page, tap below. If you need it more urgently, just <Link color="red" onClick={openTawkToChat}> start a chat with us </Link>and we'll get back to you as soon as possible.
          </Text>
        </VStack>
        <Flex flexDir="column" width="90%" as="form" onSubmit={handleSubmit}>
          <Center gap="1vw">
            <Button as={ReactRouterLink} to={`/repair/quote-3/${id}`} colorScheme="gray" bgColor="bg.600" color="white" size="lg" mt="4" type="submit">
              Back
            </Button>
            <Button as={ReactRouterLink} to={`/home`} colorScheme="red" bgColor="highlight.500" size="lg" mt="4" type="submit">
              Home
            </Button>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};

export default QuoteSubmitted;
