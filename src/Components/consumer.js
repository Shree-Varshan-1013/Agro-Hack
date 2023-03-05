import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Box, Container, CardActionArea, CardActions, Paper } from '@mui/material';

const useStyles = makeStyles({
    root: {
        maxWidth: 310,
        transition: "transform 0.15s ease-in-out"
    },
    cardHovered: {
        transform: "scale3d(1.25, 1.25, 1)"
    }
});


const Consumer = () => {

    const classes = useStyles();
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })

    const arr = [
        {
            "title": "Grains",
            "img": "/images/grains.jpg",
            "desc": "A grain is a small, hard, dry fruit (caryopsis) – with or without an attached hull layer – harvested for human or animal consumption.",
            "to": "/grains"
        },

        {
            "title": "Vegetables",
            "img": "/images/vegetables.jpg",
            "desc": "Vegetables can be eaten either raw or cooked and play an important role in human nutrition, shortened slang term - veggie",
            "to": "/vegetables"
        },

        {
            "title": "Fruits",
            "img": "/images/fruits.jpg",
            "desc": "Fruits are the means by which flowering plants (also known as angiosperms) disseminate their seeds.fruit is a mature, ripened ovary",
            "to": "/fruits"
        }
    ];

    return (
        <Container className="main" maxWidth={false} maxHeight={false} style={{ backgroundImage: `url("/images/consumerback.jpg")` }}>
            <Box className="ma" display="flex"
                justifyContent="center"
                flexDirection="column"
                minHeight="100vh"
            >
                <Box mb={7} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h2" style={{ color: "white" }}>Consumer Section</Typography>
                    <Typography variant="h5" style={{ color: "white" }}>Healthful life begins from here....</Typography>
                    <Typography variant="h5" style={{ color: "white" }} gutterBottom>Choose your Category !</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                    {
                        arr.map((ele) => {
                            return (
                                <Link to={ele.to} style={{ textDecoration: "none" }}>
                                    <Card className={classes.root}
                                        classes={{ root: state.raised ? classes.cardHovered : "" }}
                                        onMouseOver={() => setState({ raised: true, shadow: 3 })}
                                        onMouseOut={() => setState({ raised: false, shadow: 1 })}
                                        raised={state.raised} zdepth={state.shadow} sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={ele.img}
                                                alt={ele.title}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Times New Roman' }}>
                                                    {ele.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {ele.desc}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                        </CardActions>
                                    </Card>
                                </Link>
                            );
                        })
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default Consumer