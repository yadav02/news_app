import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";
import newsApi from '../API/endPointApi'
import newsApi1 from '../API/endPointApi'
import NewsImg from "../NewsImg/NewsImg";
import PublishDateTime from "../publisDate/PublishDateTime";
import SocailIcons from "../socailIcons/socailIcons";


const DetailsPage = () => {

  const getNewsApi = useApi(newsApi.getNewsData)
  const getNewsApi1 = useApi(newsApi1.getNewsData1)


  useEffect(() => {
    getNewsApi.request()
    getNewsApi1.request()

  }, []);


  let detailPageImgStyle = {
    maxWidth: "100%",
    maxHeight: "250px",
    borderRadius: "3px",
  }

  const handleClick = url => {
    window.open(url, '_blank', 'noopener,noreferrer')

  }
  let finalData = [...getNewsApi?.data, ...getNewsApi1?.data]
  const { newsId } = useParams();
  const thisNews = finalData?.find((newsDetails, index) => index == newsId);
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
          <Box display={'flex'} ml={5}>
            <PublishDateTime datatime={thisNews?.pubDate} />
            <SocailIcons getSocailIcons={['fb', 'wt', 'tel', 'link', 'tw']} />
          </Box>
          <Box justifyContent="center" pb={2}>
            <NewsImg imgData={thisNews?.image_url} styling={detailPageImgStyle} imgDesc={thisNews?.source_id} />
          </Box>
          <Typography variant="h5" sx={{ color: "red" }} pb={1}>
            {thisNews?.keywords}
          </Typography>
          <Typography variant="h6" pb={1} textAlign={'center'}>
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