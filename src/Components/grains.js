import React from 'react';
import Prod from '../gprod.json';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Box, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Swal from 'sweetalert2'; 


const Grains = ({handleClick}) => {
    return (
        <Container maxWidth={false} maxHeight={false}>
            <Typography mt={8} variant='h1' component="h2">Grains</Typography>
            <Box sx={{ maxwidth: "345px", display: "flex", justifyContent: "space-evenly", flexWrap: 'wrap' }} rowGap={8}>
                {
                    Prod.map((ele) => {
                        return (
                            <Card sx={{ maxWidth: 345, boxShadow: 20, marginInline: 2 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={ele.image}
                                    alt={ele.name}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='h2'>{ele.name}</Typography>
                                    <Typography variant="subtitle1" component='p'>{ele.description}</Typography>
                                    <Typography variant='h5' component='h2'>₹{ele.price}<span style={{ fontSize: "15px" }}>    Per Kg</span></Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton size="large"
                                        onClick={() => {
                                            handleClick(ele);
                                            Swal.fire({
                                                icon: "success",
                                                title: "Item added to cart :) ",
                                            });
                                        }}>
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                    <IconButton size="large">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <Typography style={{marginLeft:110}}>Available Stock {ele.stock} Kg</Typography>
                                </CardActions>
                            </Card>
                        );
                    })
                }
            </Box>
        </Container>
    )
}

export default Grains;