import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../Styles/web.css';

const Home = () => {
    // function googleTranslateElementInit() {
    //     new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    // }
    // <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    // const text1 = "//translate.google.com/translate_a/element.js?cb=";
    return (
        <Container className="main"  maxWidth={false} maxHeight={false}>
            <Box className="content" display="flex"
                justifyContent="space-evenly"
                alignItems="flex-start"
                flexDirection="column"
                minHeight="70vh"
                >
                <Typography variant='h1' marginTop={20}>WELCOME YOU !! <br /><Typography variant="">GET CONNECTED</Typography> </Typography>
                <Typography marginBottom={15}><q>விதைப்பவனே விலையை தகுதியிடுபவன்</q></Typography>
            </Box>
            <Box p={2} marginLeft={2}>
                <Typography variant='subtitle1' style={{ fontSize: 20, color: "white" }} gutterBottom>This web act as a bridge for both farmers and consumers.<br />We sure that this app must be beneficial one.<br />All other details were in about page.</Typography>
                <Link to='/signup'><button className="cn">JOIN US</button></Link>
            </Box>
        </Container>
    );
}

export default Home;
            // <div className="content">
            //     <h1 style={{padding:100}}>WELCOME YOU!!<br /><span>GET CONNECTED</span> <br />
            //         <q>விதைப்பவனே விலையை தகுதியிடுபவன்</q></h1>
            //     <p className="par">This web act as a bridge for both farmers and consumers.<br />We sure that this app must be beneficial one.<br />All other details were in about page.</p>
            //     <Link to='/signup'><button className="cn">JOIN US</button></Link>
            // </div>