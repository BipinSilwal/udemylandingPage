import React from 'react'
import {Box, styled} from '@mui/system'
import { Typography  } from '@mui/material'


const BackgroundSection = styled(Box)(({theme})=>`

     
        width:100%;
        height:63vh;
        background:url('/Images/b.jpg');
        background-size:cover;
        display:flex;
        align-items:center;
        
        
        
        
       
        
        
        
`);



const TypographyBox = styled(Box)(({theme})=>`

     
        width:33%;
        height:25vh;
        margin-left:90px;
        background-color:white;
        padding:20px;
        margin-top:-100px;
      
        
        
    
       
       
        
       
        
        
        
`);




const MainSection = () => {
  return (<>
  

  <BackgroundSection>


       
    <TypographyBox>
        <Typography variant="h4" sx={{ fontWeight:"bold",  lineHeight:"1.5" }}>Learing that gets you</Typography>
        <Typography variant="body1">Skills for your present (and your future). Get started with us.</Typography>


    </TypographyBox>
        



  </BackgroundSection>
      
  
  
  
  
  
  
  
  </>
   

  )
}

export default MainSection 