import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import '../Styles/service.css';

const Services = () => {
  return (
    <>
      <Container style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_960_720.jpg")`, height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} maxWidth={false}>
        <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} mt={6}>
          <Typography variant='h2' component="h2" gutterBottom mt={4}>Services</Typography>
          <div style={{ paddingBlock: 20 }}>
            <a href='#Loans'><Button variant='contained' color='warning' style={{ marginLeft: 20 }}>Loans</Button></a>
            <a href="#Subsidies"><Button variant='contained' color='warning' style={{ marginLeft: 20 }}>Subsides</Button></a>
            <a href='#Helpline Numbers'><Button variant='contained' color='warning' style={{ marginLeft: 20 }}>Helpline numbers</Button></a>
          </div>
        </Box>
        <Box style={{ padding: 80 }}>
          <div id="Loans">
          <Typography variant='subtitle1' gutterBottom sx={{ fontSize: "25px", fontWeight:600 ,marginBottom:3}}>" SBI bank is the best bank for farming loans according to the survey.
          here loan percentage ranges from 4%-7%.
          crops like Sorgum, Sweetcorn, Teff, Amarnath, Black quinoa tamilnadu government gives loan amount upto maxing range is 10,000 per year.
           For Rice related crops Tamilnadu government gives loan amount maximum 5 lakhs per year acoording to land(acres). "
            </Typography>
            <Typography variant='h4' gutterBottom className='head'>State Government Loans : </Typography>
            <Typography variant='subtitle1' gutterBottom sx={{ fontSize: "18px" }}>Through the Tamil Nadu Agricultural Development Bank, the state government of Tamil Nadu offers farmers a variety of agricultural loans (TNAU). <br />The bank provides loans for a variety of uses, including farming, horticulture, dairy and poultry production, agricultural mechanisation, and more.<br />
              Farmers that meet the requirements can apply for these loans online or at any TNAU location. <br />The type of loan and the applicant's creditworthiness influence the loan amount and interest rate.<br /><br />
              The following links provide additional details about Tamil Nadu state agricultural loans :</Typography>

            <li>Agriculture Department of the Tamil Nadu State Government : <a href="http://agriculture.tn.gov.in/ " >http://agriculture.tn.gov.in/</a> </li>
            <li>Tamil Nadu Agricultural Development Bank (TNAU) : <a href="https://www.tnau.ac.in/agri bank/">https://www.tnau.ac.in/agri bank/</a><br /></li>
            <li> Farmer's Portal of the State of Tamil Nadu : <a href="http://tnfarmers.tn.gov.in/">http://tnfarmers.tn.gov.in/</a></li>
            <p>*Please be aware that the links could change in the future, therefore I suggest verifying them again on the official websites.</p>

            <Typography variant='h4' gutterBottom mt={4} className='head'>Central Government Loans :</Typography>
            <Typography variant='subtitle1' sx={{ fontSize: "18px" }}>The Government of India provides various agricultural loans through various schemes and institutions such as the National Bank for Agriculture and Rural Development (NABARD), the Regional Rural Banks (RRBs), and the Cooperative Banks.
              Here are some of the popular Central Government agricultural loan schemes:</Typography><br />
            <li>Pradhan Mantri Fasal Bima Yojana (PMFBY) - Crop Insurance scheme</li>
            <li>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) - Direct income support to small and marginal farmers</li>
            <li>Agriculture Infrastructure Fund - funding for building and upgrading rural agricultural markets</li>
            <li>Paramparagat Krishi Vikas Yojana (PKVY) - Organic farming development scheme</li>

            <Typography variant='subtitle1' mt={4} sx={{ marginBottom: 1 }}>Here are some links for more information on Central Government agricultural loans:</Typography>

            <li>National Bank for Agriculture and Rural Development (NABARD) : <a href=" https://www.nabard.org/">https://www.nabard.org/</a></li>
            <li>Ministry of Agriculture and Farmers' Welfare : <a href=" https://www.agriculture.gov.in/"> https://www.agriculture.gov.in/</a></li>
            <li>National Portal of India : <a href=" https://www.india.gov.in/topic/agriculture"> https://www.india.gov.in/topic/agriculture</a></li>
            <Typography variant='subtitle1' mt={3} sx={{ fontSize: "18px" }}>*Please note that the links may change in future, and I recommend double checking with the official websites for the most up-to-date information</Typography>

          </div>

          <div id="Subsidies">
            <Typography variant='h4' gutterBottom mt={4} className='head'>State Governmet Subsidies : </Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: 1, fontSize: "18px" }} className='contentb'>The Tamil Nadu state government provides various subsidies for farmers and crops through various schemes and departments.<br />
              Here are some of the popular subsidy schemes for farmers in Tamil Nadu:</Typography>
            <li>Tamil Nadu Crop Insurance Scheme (TNCIS) - crop insurance scheme for farmers</li>
            <li>Tamil Nadu State Natural Disaster Relief Fund (TNSNDRF) - financial assistance for farmers affected by natural disasters</li>
            <li>Tamil Nadu Agricultural Mechanization and Infrastructure Development scheme (TAMID) - subsidy for purchase of agricultural machinery</li>
            <li>Tamil Nadu Horticulture Development scheme (TNHDS) - subsidy for horticulture development</li>
            <Typography variant='subtitle1' sx={{ marginBottom: 1, marginTop: 1, fontSize: "18px" }} className='contentb'>Here are some links for more information on Tamil Nadu state subsidies for farmers and crops:</Typography>
            <li>Tamil Nadu Agricultural Development Bank (TNAU):<a href="https://www.tnau.ac.in/agri_bank/">https://www.tnau.ac.in/agri_bank/</a></li>
            <li>Tamil Nadu State Government's Agriculture Department:<a href="http://agriculture.tn.gov.in/">http://agriculture.tn.gov.in/</a></li>
            <li>Tamil Nadu State Government's Farmer's Portal: <a href="http://tnfarmers.tn.gov.in/">http://tnfarmers.tn.gov.in/</a></li>
            <Typography variant='subtitle1' sx={{ marginTop: 1, fontSize: "18px" }} className='contentb'>Please note that the links may change in future, and I recommend double checking with the official websites for the most up-to-date information. Additionally, some of the subsidies are based on the crop and the region, so it's best to check the specific schemes and their eligibility criteria on the official websites.</Typography>

            <Typography variant='h4' gutterBottom mt={4} className='head'>Central Government Subsidies : </Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: 1, fontSize: "18px" }} className='contentb'>The Government of India provides various subsidies for farmers and crops through various schemes and departments.<br />Here are some of the popular subsidy schemes for farmers in India:</Typography>

            <li>Pradhan Mantri Fasal Bima Yojana (PMFBY) - Crop Insurance scheme</li>
            <li>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) - Direct income support to small and marginal farmers</li>
            <li>Paramparagat Krishi Vikas Yojana (PKVY) - Organic farming development scheme</li>
            <li>Pradhan Mantri Kisan Maandhan Yojana (PM-KMY) - Pension scheme for small and marginal farmers</li>
            <li>National Food Security Mission (NFSM) - subsidy for food grains production</li>
            <li>National Horticulture Mission (NHM) - subsidy for horticulture development</li>
            <Typography variant='subtitle1' sx={{ marginBottom: 1, marginTop: 1, fontSize: "18px" }} className='contentb'>Here are some links for more information on Central Government subsidies for farmers and crops:</Typography>

            <li>Ministry of Agriculture and Farmers' Welfare:<a href=" https://www.agriculture.gov.in/"> https://www.agriculture.gov.in/</a> </li>
            <li>National Portal of India:<a href=" https://www.india.gov.in/topic/agriculture"> https://www.india.gov.in/topic/agriculture</a></li>
            <li>National Bank for Agriculture and Rural Development (NABARD):<a href="ttps://www.nabard.org/"> https://www.nabard.org/</a></li >
            <Typography variant='subtitle1' sx={{ fontSize: "18px" }} className='contentb'>Please note that the links may change in future, and I recommend double checking with the official websites for the most up-to-date information. </Typography>

          </div >
          <div id="Helpline Numbers">
            <Typography variant='h4' gutterBottom mt={4} className='head'>HelpLine Numbers :</Typography>

            <Typography variant='subtitle1' sx={{ fontSize: "18px", fontSize: "18px" }} className='contentb'>The Tamil Nadu state government has a dedicated helpline number for the Agriculture department which farmers can use to get information and assistance related to agricultural activities in the state. The helpline number is 1800-425-5555. This number is available from Monday to Friday from 8:00 AM to 8:00 PM, and on Saturdays from 8:00 AM to 2:00 PM.</Typography>
            <Typography variant='subtitle1' sx={{ fontSize: "18px", fontSize: "18px" }} className='contentb'>In addition to this, farmers can also contact the following numbers for more information:</Typography>
            <ul>
              <li>Tamil Nadu Agricultural Development Bank (TNAU): <b>+91-44-22351133</b></li>
              <li>Tamil Nadu State Government's Agriculture Department:<b> +91-44-25334840</b></li>
              <li>Tamil Nadu State Government's Farmer's Portal :  <b>+91-44-28880009</b></li>
            </ul>

            <Typography variant='h4' sx={{ marginTop: 15, marginBottom: 2 }} className='head'>Central Govt.Helpline numbers</Typography>
            <Typography variant='subtitle1' sx={{ fontSize: "18px", fontSize: "18px" }} className='contentb'>The Government of India has various helpline numbers for the Agriculture department which farmers can use to get information and assistance related to agricultural activities in the country.</Typography>
            <Typography variant='subtitle1' sx={{ fontSize: "18px", fontSize: "18px" }} className='contentb'>Some of the helpline numbers are:</Typography>

            <li>National Agriculture Market (e-NAM) helpline: <b>+91-1800-180-1551</b></li>
            <li>National Horticulture Board (NHB) helpline:<b>+91-11-23386446, +91-11-23386447</b></li>
            <li>Ministry of Agriculture and Farmers' Welfare helpline: <b>+91-11-23386446</b></li>
            <li>National Bank for Agriculture and Rural Development (NABARD) helpline: <b>+91-22-22741231</b></li>
            <li>National Rainfed Area Authority (NRAA) helpline: <b>+91-11-24696951</b></li>

            <Typography variant='subtitle1' mt={2} marginBottom={4} sx={{ fontSize: "18px", fontSize: "18px" }} className='contentb'>* Please note that the helpline numbers may change in future, and I recommend double checking with the official websites for the most up-to-date information. </Typography>
          </div >
        </Box>
      </Container>
    </>
  )
}

export default Services