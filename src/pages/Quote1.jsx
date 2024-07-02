import React, { useRef, useEffect, useState } from 'react';
import { Box, Button, Center, Divider, Flex, FormControl, Image, Input, Select, Text, useMediaQuery, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import repairimage from "../media/repair.png";
import devices from "../media/icons/devicessideways.png";
import laptopOutline from "../media/icons/laptopoutline.png";
import phoneOutline from "../media/icons/phoneoutline.png";
import desktopOutline from "../media/icons/desktopoutline.png";
import otherOutline from "../media/icons/otheroutline.png";
import emailjs from 'emailjs-com';

const RepairForm = () => {
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState('auto');
  const [selectedDevice, setSelectedDevice] = useState('laptop');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current && selectRef.current) {
      const inputHeight = inputRef.current.offsetHeight;
      const selectHeight = selectRef.current.offsetHeight;
      const totalHeight = inputHeight + selectHeight + 20; // Adjust the 20px margin as needed
      setContainerHeight(totalHeight);
    }
  }, []);

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  const getDeviceImage = () => {
    switch (selectedDevice) {
      case 'phone': return phoneOutline;
      case 'laptop': return laptopOutline;
      case 'desktop': return desktopOutline;
      case 'other': return otherOutline;
      default: return laptopOutline;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      setIsLoading(false);
      return;
    }
  
    const formData = new FormData(form);
    const email = formData.get('email');
    if (!isValidEmail(email)) {
      toast({ title: 'Invalid Email', description: 'Please enter a valid email address.', status: 'error', duration: 5000, isClosable: true });
      setIsLoading(false);
      return;
    }
  
    const phone = formData.get('phone');
    if (!isValidPhone(phone)) {
      toast({ title: 'Invalid Phone Number', description: 'Please enter a valid phone number.', status: 'error', duration: 5000, isClosable: true });
      setIsLoading(false);
      return;
    }
  
    try {
      await sendEmail(formData);
  
      const response = await fetch('https://admin.bonfirepcs.com/api/quotes', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ "data": { "Name": formData.get('name'), "Phone": formData.get('phone'), "Email": formData.get('email'), "DeviceType": formData.get('device-type'), "DeviceName": formData.get('device-name') } }), });
  
      if (!response.ok) {
        throw new Error('Failed to create customer');
      }
  
      const responseData = await response.json();
      const newObjectId = responseData.data.id;
  
      navigate(`/repair/quote-2/${newObjectId}`);
  
    } catch (error) {
      console.error('Error:', error);
      toast({ title: 'Error', description: `There was an issue submitting your request ${error}. Please try again later.`, status: 'error', duration: 5000, isClosable: true });
    } finally {
      setIsLoading(false);
    }
  };

  const sendEmail = async (data) => {
    try {
      await emailjs.send("service_3eh0pwm", "template_s2h32uf", { to_email: data.get('email'), customer_name: data.get('name'), customer_phone: data.get('phone'), message: `Device Type: ${data.get('device-type')}, Device Name: ${data.get('device-name')}`, }, "noSKe9q4pG9tTE82k");
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const isValidPhone = (phone) => /^\+?\d{0,13}$/.test(phone);
  const [isMobile] = useMediaQuery([`(max-width: 700px)`]);

  return (
    <Box display="flex" minHeight={{lg:"100vh", base:"70vh"}} flexDir={{lg:"row", base:"column"}}>
      <Box flex={{ base: undefined, lg: "0.5" }} sx={isMobile ? {height: "20vh"} : {}} gap="2vh" position="relative" display="flex" flexDir="column" justifyContent="center" alignItems="center" bgImage={repairimage} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" _before={{ content: '""', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, bgGradient: 'linear(to-t, rgba(29, 29, 29, 1), rgba(29, 29, 29, 0.6))' }}>
        <Text position="relative" fontSize={{lg: "6vw", base: "10vw"}} color="white" fontFamily="Cocogoose" lineHeight="6vw" textAlign="center">Start a Repair         </Text>
        { isMobile &&<Image position="relative" src={devices} sx={isMobile ? {height: "4vh"} : {height: "15vh"}} maxH="150px" />}
      </Box> 
      <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="bg.300" color="white" paddingX="2vw">
      { !isMobile &&
        <Image src={devices} sx={isMobile ? {width: "80vw"} : {height: "15vh"}} mb="8" maxH="150px" />
}
        <Text mb="8" fontSize="1.1rem" textAlign="center" w={{lg: "80%"}}>Welcome to Bonfire's Online Quote system. To get a quote, we'll just need some information about your device.</Text>
        <Flex flexDir="column" width="80%" as="form" onSubmit={handleSubmit}>
          <Flex width="100%" gap="1vw" mb="4">
            <Box flexDir="row" flex="2">
              <FormControl id="device-type" mb="4">
                <Select ref={selectRef} variant="filled" placeholder="Select device type*" bg="bg.400" color="white" _placeholder={{ color: 'gray.500' }} onChange={handleDeviceChange} name="device-type" required sx={{ '> option': { background: 'bg.400' } }}>
                  <option value="Phone">Phone</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
              <FormControl id="device-name">
                <Input ref={inputRef} type="text" placeholder="Device Name*" variant="filled" bg="bg.400" color="white" name="device-name" required />
              </FormControl>
            </Box>
          </Flex>
          <Divider borderColor="gray.600" mb="4" />
          <Box>
            <Flex gap="4" mb="4">
              <FormControl id="name">
                <Input type="text" placeholder="Your Name*" variant="filled" bg="bg.400" color="white" name="name" required />
              </FormControl>
              <FormControl id="phone">
                <Input type="tel" placeholder="Your Phone*" variant="filled" bg="bg.400" color="white" name="phone" pattern="[0-9+-]{10,13}" title="Please enter a valid phone number" required />
              </FormControl>
            </Flex>
            <FormControl id="email">
              <Input type="email" placeholder="Your Email*" variant="filled" bg="bg.400" color="white" name="email" required />
            </FormControl>
            <Center>
              <Button colorScheme="red" bgColor="highlight.500" size="lg" mt="4" type="submit" isLoading={isLoading}>Next</Button>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default RepairForm;
