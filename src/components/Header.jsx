import { Avatar, Box, Typography, Container } from "@mui/material";
import Grid from '@mui/material/Grid2';
import avatar from "../assets/favicon.ico";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box sx={{ backgroundColor: "background.header", height: "70px" }} component="header">
      <Container sx={{ height: "100%" }}>
        <Grid container sx={{ height: "100%" }} justifyContent="space-between" alignItems="center">
          <Grid>
            <Link to="/"><Typography variant="h4" component="p" color={"white"} fontWeight="700">Movie App</Typography></Link>
          </Grid>
          <Grid>
            <Avatar src={avatar} alt="avatar" sx={{ width: "60px", height: "60px" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
