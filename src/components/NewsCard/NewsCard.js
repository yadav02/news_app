import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NewsImg from "../NewsImg/NewsImg";
import Keyword from "../Keywords/keyword";
import PublishDateTime from "../publisDate/PublishDateTime";
import Loader from "../Loader/Loader";
import { useStyles } from './customStyle';


const NewsCard = ({ newsData }) => {


  let ImgStyle = {
    maxWidth: "100%",
    maxHeight: "250px",
    borderRadius: "7px",
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  let NewsImgStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "7px",

  }

  const classes = useStyles();

  return (

    <>
      {newsData.loader ? <Loader /> : newsData?.getNewsData?.map((item, index) => {
        return (
          <Box
            p={2}
            width={item.type ? '50%' : '100%'}
            className={item.type ? '' : classes.single}
            key={index}
            style={{ boxSizing: "border-box" }}
            px={2}
            py={4}
          >
            <Card sx={{ minWidth: 275 }}>
              <Typography fontSize={'22px'} color={'green'}>{item.title}</Typography>
              <CardContent>
                <Box>
                  <Link
                    to={`/newsdetails/${index}`}
                    style={{ textDecoration: "none" }}
                  >
                    <NewsImg imgData={item.image_url} styling={item.type ? ImgStyle : NewsImgStyle} imgDesc={item.source_id} />
                  </Link>
                </Box>
                <Box>
                  <Keyword keywords={item.keywords} />
                  <Typography variant='h6' pb={1}>
                    {item.description}
                  </Typography>
                  <PublishDateTime datatime={item.pubDate} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </>

  );
};
export default NewsCard;