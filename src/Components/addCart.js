import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Box, CardHeader, Container, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Nothing from "./nothing";
import {Link} from 'react-router-dom';
import "../Styles/addCart.css";
import Swal from "sweetalert2";

const AddCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(1);

  const [stock, setStock] = useState(1);

  const stockReducer = (event) => {
    if(stock  <  1){
      setStock(1);
    }
  }



  const handleRemove = (id) => {
    Swal.fire({
      toast:true,
      icon: "info",
      title: "Successfully Removed",
      text: "One Item has been removed from your cart",
    });

    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
    stockReducer();
  });

  const eventTrap = () => {
    localStorage.setItem('billAmount', price);
  }


  return (
    <>
      {price === 0 ? (
        <Nothing />
      ) : (
        <div className="baseBox">
          <Box style={{ margin: 70 }}>
            <Typography variant="h2">Your Cart</Typography>
            <Container
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                columnGap: "80px",
                rowGap: "20px",
              }}
              fullHeight={false}
            >
              {cart.map((ele) => {
                return (
                  <Card
                    sx={{
                      maxWidth: 300,
                      marginBlock: 2,
                      boxShadow: 20,
                      marginInline: 2,
                    }}
                  >
                    <CardHeader
                      action={
                        <IconButton
                          aria-label="settings"
                          size="large"
                          onClick={() => {
                            handleRemove(ele.id);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                      title={`${ele.name}  -   ₹${ele.price} per kg`}
                      subheader={`Remaining Stock : ${ele.stock} Kg`}
                    />
                    {/* {stock} */}
                    <CardMedia
                      component="img"
                      height="194"
                      image={ele.image}
                      alt={ele.name}
                    />
                    <CardActions>
                      <div
                        style={{
                          display: "block",
                          marginInline: "auto",
                          padding: 10,
                        }}
                      >
                        <span className="con">Quantity</span>
                        <IconButton
                          id="decre"
                          size="large"
                          name={ele.name}
                          onClick={(event) => {
                            handleChange(ele, -1);
                            console.log(event.currentTarget.name)
                            setStock(stock-1);
                          }}
                          >
                          <RemoveIcon />
                        </IconButton>
                        <span className="con">{ele.amount}</span>
                        <IconButton
                          id="incre"
                          size="large"
                          name={ele.name}
                          onClick={(event) => {
                            handleChange(ele, 1);
                            console.log(event.currentTarget.name)
                            setStock(stock+1);
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                    </CardActions>
                  </Card>
                );
              })}
            </Container>
            <h1 id="total" style={{marginBottom:20}}>Cart Total : ₹{price} </h1>
            <div className="buy">
              <Link to="/payment" onClick={eventTrap}>
                <Button size="large" variant="contained" color="warning" id="nothing-button">
                  Proceed to Pay
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      )}
    </>
  );
};

export default AddCart;

