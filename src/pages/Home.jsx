import { Box, Button, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import backgroundImg from '../assets/backgr.jpg'
import {useRef} from 'react';

function Home({darkTheme}){

  const bottomSectionRef = useRef(null);
  const handleScrollToBottom = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Box>
        <Box
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                minWidth:"100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "",
                alignItems: "left",
                marginTop: "50px",
                paddingTop: "100px"
              }}
        >
           <Typography
              variant="h2"
              sx={{
                paddingLeft: '50px',
                pt: '60px',
                color: "#fff",
                lineHeight: "1.5",
                fontFamily: "Roboto Mono",
                fontWeight: "Bold",
              }}
            >
              Meet TalentX
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#fff", lineHeight: "1.5", paddingLeft: '50px'}}
            >
              Get the most skilled workforce at the most affordable pricing
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Nam repellat, facilis deserunt aliquam vero, <br/>saepe fuga nisi esse similique vel libero ipsum, labore hic <br/>sint accusamus impedit provident sed illo?
            </Typography>
            <Box
            paddingTop = '50px'
              paddingLeft= '150px'
            >
            <Button
              onClick={handleScrollToBottom}
              variant="contained"
              color={darkTheme?"secondary":"primary"}
              sx={{
                borderRadius: "25px",
                padding: "15px 30px",
                fontSize: "16px",
                '&:focus': {outline: 'none'}
              }}
            >
              Scroll Down
            </Button>
          </Box>
        </Box>
        <Box 
          ref={bottomSectionRef}
          color={darkTheme?"white":"black"}
          >
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <h1>Title 1 Will be here</h1>
              <Typography>
                    this is the details about the title one which will go here below the title of the thingy thing thing
              </Typography>
          </Grid>
        </Grid>

        <br/>
              
        </Box>
      
      </Box> 
    </>
  );
}

Home.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default Home;
