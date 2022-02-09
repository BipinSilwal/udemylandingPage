import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { Box  } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';

const ProductCard = () => {
  const [data, setData] = useState([]);




  const fetchingProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setData(data);
    
  };


console.log(data);
  useEffect(()=>{

        fetchingProducts();



  },[])

  return (
    <>
      <Grid container spacing={2}>
            {data.slice(6,11).map((value) => {
                     const { image, price, title, rating } = value;

          return (
            <>
              <Grid item>
                  
                <Card sx={{ maxWidth: 235 ,height :'50vh'}} elevation={0}>
                <Box height="25vh">
                  <CardMedia
                    component="img"
                    height="100%"
                    width="50%"
                    image={image}
                    alt="green iguana"
                    backgroundSize="cover"
                 
                  />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'bold'}}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {rating.rate}
                      <Rating name="half-rating-read" defaultValue={2.5} precision={rating.rate} readOnly />
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {`$${price}`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{backgroundColor:'yellow'}}>Best seller</Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductCard;
