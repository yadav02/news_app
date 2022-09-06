import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const Footer = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            style={{ marginLeft: "auto", marginRight: "auto" }}
            noWrap
            component="a"
          >
            ©Copyright News Room ,All Right Reserved
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;