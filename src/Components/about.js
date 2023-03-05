import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material'
import '../Styles/about.css';

const About = () => {
    return (
        <Container className="hero" maxWidth={false} maxHeight={false}>
            <Box className="ma" display="flex"
                justifyContent="space-evenly"
                alignItems="flex-start"
                flexDirection="column"
                minHeight="100vh"
                padding="40px"
            >
                <Typography mt={8} variant='h2' component="h2" sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 800 }}>About Us</Typography>
                <div className="page" style={{textAlign:"justify"}}>
                    <Typography style={{ color: 'black', fontSize: "22px", fontWeight: 800, fontFamily: "'Jost', sans-serif", lineHeight: "44px" }}><img src="./images/farmer.jpg" style={{boxShadow:"0 0 50px 50px #282727 inset", width:"250px", height:"200px"}} /><q style={{ color: "#244C5A", fontSize: 35, textAlign:"justify" }}>KNOW YOUR FARMER :)  KNOW YOUR CONSUMER</q><br /><b>Agriculture is the backbone of India.&nbsp;</b>India's economy relies heavily on agriculture. India served as a historical model for agriculture at one point. But today, nations like the USA and China surpass us by deploying cutting-edge technology that don't require as much labour. Okay, so other from focusing on the relationship between the consumer and the farmer, our employees are not interested in this subject. The Sad fact is that we have no connection to one another.<br /><b>We</b> identified that issue and developed this webpage to address it. It is possible for farmers and consumers to communicate. Consumers and farmers each have their own "consumer portal" and "farmer portal". Another benefit is that stock exchange services are available here. A price exchange is necessary if there is a stock exchange. As a result, farmers are free to determine their own prices for their goods. Additionally, consumers can examine and contrast pricing variations and their causes. The ability for users to translate the entire website into different languages is an added benefit. For This project seeks to build a link between farmers and consumers. Additionally, to facilitate the sale of agricultural products, provide farmers with a steady source of income, and ensure the quality and hygienic of the final product.</Typography>
                </div>
            </Box>
        </Container>
    );
}

export default About;