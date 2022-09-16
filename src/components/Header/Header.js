import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import Loader from "../Loader/Loader";
import useApi from "../Hooks/useApi";
import quotesApi from '../../API/endPointApi'
import Weather from "../Weather/weather";



const Header = () => {

  const getQuotesApi = useApi(quotesApi.getQuotesData)

  useEffect(() => {
    getQuotesApi.request()
  }, []);

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: "center" }}>
          <Box display={"flex"} position="sticky" top={0} alignItems={'center'}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              NEWSROOM
            </Typography>
            <Weather/>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="flex-end"
            width={'70px'}
            paddingLeft={'50px'}
          >
            {getQuotesApi.isLoading ? <Loader /> :(
              <Typography>
                {getQuotesApi.data?.quote}
                <br></br>
                {getQuotesApi.data?.author}
              </Typography>
            )
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;