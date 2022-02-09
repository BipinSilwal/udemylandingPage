import React  from "react";
import { Box, styled } from "@mui/system";
import { Button,  Tab, Tabs,  Typography , Grid } from "@mui/material";
import ProductCard from "../Product/ProductCard";
import data from  '../../data.json';

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const NavMain = styled(Box)(
  ({ theme }) => `

    width:97%;
    margin:20px auto;
    height:10vh;
   

`
);

const NavList = styled(Box)(
  ({ theme }) => `

    width:97%;
    margin:5px auto;
    border: 1px solid black;
    padding:35px;
    

`
);

const Navsection = () => {


      

  return (
    <>
      <NavMain>
        <Typography variant="h4" sx={{ fontWeight: "bold", lineHeight: "1.5" }}>
          A broad selection of courses
        </Typography>
        <Typography variant="body1">
          Choose from 183,000 online video courses with new additions published
          every month
        </Typography>
        </NavMain>

    
        <Tabs>
          <Tab label="Python" />
          <Tab label="Excel" />
          <Tab label="Web development" />
          <Tab label="Javascript" />
          <Tab label="Data science" />
          <Tab label="AWS certification" />
          <Tab label="Drawing" />
        </Tabs>

        

        <NavList>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", lineHeight: "1.5" }}
          >
            Expand your career opportunities with Python
          </Typography>
          <Box width="65%" marginBottom="15px">

          
          <Typography variant="body1">
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to
          </Typography>
          </Box>
          <Button variant="outlined" sx={{color:'white', backgroundColor:'black'}} >Explore Python</Button>


        
          <Box marginTop="20px">
                <ProductCard/>

        </Box>  


        </NavList>

    <NavList sx={{border:'none'}}>

        <Box marginTop="40px" >

        <Typography
            variant="h5"
            sx={{ fontWeight: "bold", lineHeight: "1.5",  marginBottom:"15px"}}
          >
            students are viewing
          </Typography>
            
            <ProductCard/>

        </Box>  
     </NavList>


     <NavList sx={{border:'none'}}>

<Box marginTop="40px" >

<Typography
    variant="h5"
    sx={{ fontWeight: "bold", lineHeight: "1.5",  marginBottom:"15px"}}
  >
        Top Categories
  </Typography>
    
    <Grid container spacing={2}>
        {data.map(value=>
            <Grid item md={3}>
            <Card sx={{ maxWidth: 335 ,height :'50vh'}} elevation={0}>
              
                  <CardMedia
                    component="img"
                    height="80%"
                    width="50%"
                    image={value.imageUrl}
                    alt="green iguana"
                    backgroundSize="cover"
                 
                  />
                   <CardContent>
                    <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'bold'}}>
                      {value.title}
                    </Typography>
                    </CardContent>
                    </Card>
                
                </Grid>
            
            

            )}
              </Grid>

</Box>  
</NavList>


       
    </>
  );
};

export default Navsection;
