import React from 'react'
import {Box, styled} from '@mui/system'
import { Button, Paper, TextField, Typography  } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';


const NavMain = styled(Box)(({theme})=>`

    
    height:12vh;
    display:flex;
    justify-content:space-around;
    align-items:center;

`
);


const SearchBox = styled(Box)(({theme})=>`

    

    display:flex;
    justify-content:space-around;
    align-items:center;

`
);


export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 40px;
  }
`;

const Navbar = () => {
  return (<>
  
  <Paper elevation={1}>
        <NavMain>

               

                        <Box component="img" src="/Images/logo-udemy.svg" width="10%" height="50%"/>
                        <SearchBox width="65%">
                                <Typography>Categories</Typography>
                                <Box width="60%" sx={{position:'relative' ,}}>

                                
                                <TextFieldWrapper placeholder='Search for anything'  fullWidth sx={{ border:"50%" }} />
                                <SearchOutlinedIcon sx={{position:'absolute', right:"20px" ,top:"20px"}}/>
                                </Box>
                                <Typography>Udemy Business</Typography>
                                <Typography>Tech on Udemy</Typography>

                        </SearchBox>
                        <SearchBox width="20%">
                                <ShoppingCartOutlinedIcon/>
                                <Button variant="outlined" sx={{color:'black'}} >Login</Button>
                                <Button variant="outlined" sx={{color:'white', backgroundColor:'black'}} >sign up</Button>
                                <Button variant="outlined"><LanguageIcon/></Button>

                        </SearchBox>




            




        </NavMain>
        </Paper>
  
  
  
  </>
    


  )
}

export default Navbar