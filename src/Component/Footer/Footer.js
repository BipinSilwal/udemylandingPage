import React from "react";
import { Box, styled } from "@mui/system";
import {
  Typography,
  Button,
  List,
  ListItemText,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const FooterSection = styled(Box)(
  ({ theme }) => `

     
        height:50vh;
        margin-top:40px;
        padding:20px;
        background-color:#1c1d1f;
        color:white;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
       
        
        
        
        
       
        
        
        
`
);

const Footer = () => {
  return (
    <>
      <FooterSection>
        <Box sx={{ display: "flex", justifyContent:'space-between' }}>
          <Box sx={{ width: '60%', display: "flex", justifyContent:'space-between' }}>
            <Box>
              <List>
                <ListItemText primary="Udemy Business" />

                <ListItemText primary="Tech on Udemy" />
                <ListItemText primary="Get the app" />

                <ListItemText primary="About us" />
                <ListItemText primary="Contact us" />
              </List>
            </Box>

            <Box>
              <List>
                <ListItemText primary="Careers" />

                <ListItemText primary="Blog" />
                <ListItemText primary="Help and Support" />

                <ListItemText primary="Affiliate" />
                <ListItemText primary="Investors" />
              </List>
            </Box>

            <Box>
              <List>
                <ListItemText primary="Terms" />

                <ListItemText primary="Privacy policy" />
                <ListItemText primary="Cookie settings" />

                <ListItemText primary="Sitemap" />
                <ListItemText primary="Accessibility statement" />
              </List>
            </Box>
          </Box>
          <Box>
          <Button variant="contained" startIcon={<LanguageIcon />}>
            English
          </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src="/Images/logo-udemy.svg" alt="pictures" width="6%" />
          <Typography> 2022 Udemy, Inc</Typography>
        </Box>
      </FooterSection>
    </>
  );
};

export default Footer;
