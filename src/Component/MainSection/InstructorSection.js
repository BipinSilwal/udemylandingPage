import React from 'react'
import {Box, styled} from '@mui/system'
import { Typography, Button } from '@mui/material'




const PersonalSection = styled(Box)(({theme})=>`

     
        height:70vh;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:40px;
        
        
        
        
       
        
        
        
`);

const TypographyBox = styled(Box)(({theme})=>`

     
        width:33%;
        height:25vh;
        margin-left:90px;
        background-color:white;
        padding:20px;
        margin-top:-100px;
      
        
        
    
       
       
        
       
        
        
        
`);

const InstructorSection = () => {

    

  return (<>

    

  
  
        <PersonalSection>

            
                    <Box component="img" src="/Images/Person/instructor-1x-v3.jpg"/>
                    
                    <TypographyBox>
        <Typography variant="h4" sx={{ fontWeight:"bold",  lineHeight:"2.5" }}>Become an instructor</Typography>
        <Typography variant="body1" marginBottom='10px'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</Typography>
        <Button variant="outlined" sx={{color:'white', backgroundColor:'black'}} >Start teaching today</Button>

    </TypographyBox>
                    


        </PersonalSection>

        <PersonalSection sx={{height:"12vh", backgroundColor:"#f7f9fa"}}>

        <Typography variant="h4" sx={{ fontWeight:"bold",  lineHeight:"2.5" }}>Trusted by all Companies</Typography>

        


        </PersonalSection>

  
        <PersonalSection>

            

<TypographyBox>
<img src="/Images/Person/logo-ub.svg" alt="pictures" width="70%"/>
<Typography variant="body1" marginBottom='10px'>Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</Typography>
<Button variant="outlined" sx={{color:'white', backgroundColor:'black'}} >Get udemy Business</Button>

</TypographyBox>

<Box component="img" src="/Images/Person/ub-1x-v3.jpg"/>


</PersonalSection>


<PersonalSection>

            
<Box component="img" src="/Images/Person/transform-1x-v3.jpg"/>

<TypographyBox>
<Typography variant="h4" sx={{ fontWeight:"bold",  lineHeight:"1.2" }}>Transform your life through education</Typography>
<Typography variant="body1" marginBottom='10px'>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</Typography>
<Button variant="outlined" sx={{color:'white', backgroundColor:'black'}} >Find out how</Button>

</TypographyBox>



</PersonalSection>
  
  
  
  </>
    
  )
}

export default InstructorSection