import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../Styles/payment.css";

const Payment = () => {
  const bill = localStorage.getItem("billAmount");

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 30
            }}
          >
            <Typography id="pay-head" variant="h4" gutterBottom>Amount to be paid : ₹{bill}</Typography>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel htmlFor="grouped-select">Payment</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value={1}>Cash On Delivery</MenuItem>
                <ListSubheader>Cards</ListSubheader>
                <MenuItem value={1}>Credit card</MenuItem>
                <MenuItem value={2}>Debit Card</MenuItem>
                <ListSubheader>UPI's</ListSubheader>
                <MenuItem value={3}>Paytm</MenuItem>
                <MenuItem value={4}>Gpay</MenuItem>
                <MenuItem value={5}>Phone Pay</MenuItem>
              </Select>
            </FormControl>
            <Button id="confirm-button" variant="contained" size="large">Confirm Payment</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(images/paymentbg.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </>
  );
};

export default Payment;