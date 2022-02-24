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
                  
                <Card sx={{ maxWidth: 235 , height:'60vh' }} elevation={1}>
                <Box sx ={{height:'20vh', width: '80%', margin:'0 auto',  display:'flex', justifyContent:'center'}}>
                  <img src={image} alt="green iguana" height="100%" width="70%"/>
                  </Box>
                  <CardContent sx={{height:'20vh'}}>
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
                  <CardActions sx={{height:'20vh'}}>
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
