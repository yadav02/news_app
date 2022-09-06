import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";
import newsApi from '../API/endPointApi'
import NewsImg from "../NewsImg/NewsImg";
import PublishDateTime from "../publisDate/PublishDateTime";

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import SocailIcons from '../socailIcons/socailIcons';


const DetailsPage = () => {

  const getNewsApi = useApi(newsApi.getNewsData)


  useEffect(() => {
    getNewsApi.request()

  }, []);


  let detailPageImgStyle = {
    maxWidth: "100%",
    maxHeight: "250px",
    borderRadius: "3px",
  }

  const handleClick = url => {
    window.open(url, '_blank', 'noopener,noreferrer')

  }

  const { newsId } = useParams();
  const thisNews = getNewsApi.data?.find((newsDetails, index) => index == newsId);
  // const thisNews = getNewsApi.data?.results?.find((newsDetails, index) => index == newsId);

  return (

    <>
      <Typography fontSize={'22px'} pt={5} mt={3} textAlign={'center'}>{thisNews?.title}</Typography><Box pt={5} mt={4} ml={60}>
        <Box
          width="50%"
          px={2}
          py={4}
          style={{ boxSizing: "border-box" }}
          key={thisNews?.id}
        >
          <Box display={"flex"} justifyContent="center" pb={2}>
            <NewsImg imgData={thisNews?.image_url} styling={detailPageImgStyle} />
            <PublishDateTime datatime={thisNews?.pubDate} />
            <Box>
              <SocailIcons icons={<FacebookIcon />} />
              <SocailIcons icons={<WhatsAppIcon />} />
              <SocailIcons icons={<TelegramIcon />} />
              <SocailIcons icons={<LinkedInIcon />} />
              <SocailIcons icons={<TwitterIcon />} />
              <SocailIcons icons={<MailIcon />} />
            </Box>
          </Box>
          <Typography variant="h5" sx={{ color: "red" }} pb={1}>
            {thisNews?.keywords}
          </Typography>
          <Typography variant="h6" pb={1}>
            {thisNews?.description}
          </Typography>
        </Box>
      </Box>
      <h3
        onClick={thisNews?.link != null && thisNews?.link != '' ? () => handleClick(thisNews?.link) : ''}
        style={{ cursor: 'pointer', color: 'red' }}>Click for more news details</h3>
    </>
  );
};
export default DetailsPage;