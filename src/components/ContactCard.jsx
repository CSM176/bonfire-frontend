import { Box, Button, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, Grid, Heading, Image, Input, Select, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import chatbubble from "../media/icons/chatbubble.png"
import { Form, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ContactCard(props) {
    const [input, setInput] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        const formData = new FormData(event.target)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            phone: formData.get('phone'),
            postcode: formData.get('postcode'),
            enquirytype: formData.get('enquirytype')
        }

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "service_id": "service_3eh0pwm",
                    "template_id": "template_1vg68h3",
                    "user_id": "noSKe9q4pG9tTE82k",
                    "template_params": {
                        "to_email": `${data.email}`,
                        "customer_name": `${data.name}`,
                        "message": `${data.message}`
                    }
                }),
            })

            if (response.ok) {
                toast({
                    title: 'Message sent.',
                    description: 'You should receive a confirmation email in 1-2 minutes.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            } else {
                throw new Error('Email sending failed')
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'There was an error sending your message. Please try again later.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Text marginBottom="0.5vw" color="lightgray" fontSize={{xl: "1rem", xxxl: "1.3rem"}}> Send us an email (*required field)</Text>
            <Form method='post' action={props.page} onSubmit={handleSubmit}>
                <Flex flexWrap="wrap" justify="space-between" columnGap="1vw" gap={{base:"1vh", lg:"0vw"}}>
                    <FormControl marginBottom="1vw" display="inline" maxWidth={{base:"100vw", lg:"49%"}}>
                        <Input type="text" name="name" placeholder='Name*' variant="filled" backgroundColor="bg.200" size={{base:"md",xl: "md", xxxl: "lg"}}/>
                    </FormControl>

                    <FormControl isRequired marginBottom="1vw" display="inline" maxWidth={{base:"100vw", lg:"49%"}}>
                        <Input variant="filled" backgroundColor="bg.200" type="email" name="email" placeholder='Email*' size={{base:"md",xl: "md", xxxl: "lg"}}/>
                    </FormControl>

                    <FormControl marginBottom="1vw" >
                        <Select variant="filled" backgroundColor="bg.200" placeholder='What are you enquiring about?*' size={{base:"md",xl: "md", xxxl: "lg"}}                   sx={{
                        '> option': {
                        background: 'bg.400',
                        },}} name='enquirytype'>
                            <option  value="sales"> Sales </option>
                            <option value="techsupport"> Technical Support </option>
                            <option value="repair"> Repair </option>
                            <option value="general"> General Enquiry </option>
                        </Select>
                    </FormControl>


                    <FormControl marginBottom="1vw" maxWidth={{base:"100vw", lg:"49%"}}>   
                        <Input variant="filled" backgroundColor="bg.200" type="number" name="postcode" placeholder='Postcode' size={{base:"md",xl: "md", xxxl: "lg"}}/>
                    </FormControl>

                    <FormControl marginBottom="1vw" maxWidth={{base:"100vw", lg:"49%"}}>
                        <Input variant="filled" backgroundColor="bg.200" type="number" name="phone" placeholder='Phone' size={{base:"md",xl: "md", xxxl: "lg"}}/>
                    </FormControl>


                    <FormControl marginBottom="1vw">
                        <Textarea 
                        variant="filled" backgroundColor="bg.200"
                        placeholder='How can we help you?*'
                        name="message"
                        size={{base:"md",xl: "md", xxxl: "lg"}}/>
                    </FormControl>


                <Button type="submit" size={{base:"md",xl: "md", xxxl: "lg"}} isLoading={isSubmitting}>
                    Submit
                </Button>
                </Flex>
            </Form>
        </>
    )
}


export const createAction = async ({ request }) => {
    const data = await request.formData()

    const task = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
        phone: data.get('phone'),
        postcode: data.get('postcode'),
        enquirytype: data.get('enquirytype')
    }

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "service_id": "service_omro8as",
                "template_id": "template_1vg68h3",
                "user_id": "noSKe9q4pG9tTE82k",
                "template_params": {
                    "to_email": `${task.email}`,
                    "customer_name": `${task.name}`,
                    "message": `${task.message}`
                }
            }),
        })
        if (response.ok) {
            console.log('Email sent successfully!')
        } else
            console.log('Email failed, ', response.status, response.statusText)
            
    } catch (error) {
        console.error("Error sending email ):", error)
        
    }

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "service_id": "service_omro8as",
                "template_id": "template_s2h32uf",
                "user_id": "noSKe9q4pG9tTE82k",
                "template_params": {
                    "to_email": `${task.email}`,
                    "customer_name": `${task.name}`,
                    "message": `${task.message}`,
                    "customer_phone": `${task.phone}`,
                    "customer_postcode": `${task.postcode}`,
                    "enquirytype": `${task.enquirytype}`
                }
            }),
        })
        if (response.ok) {
            console.log('yay')
        } else
            console.log('Email failed, ', response.status, response.statusText)
            
    } catch (error) {
        console.error("Error sending email ):", error)
        
    }


    console.log(task)

    return redirect('/landing')
}