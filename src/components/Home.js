import { useEffect } from "react";
import NewsCard from "./NewsCard/NewsCard";
import Box from "@mui/material/Box";
import useApi from "./Hooks/useApi";
import newsApi from './API/endPointApi'

const Home = () => {

  const getNewsApi = useApi(newsApi.getNewsData)

  useEffect(() => {

    getNewsApi.request()

  }, [])


  let type = true

  return (

    <Box display={"flex"} flexWrap="wrap" pt={5} mt={4}>
      <NewsCard newsData={{ getNewsData: getNewsApi?.data, loader: getNewsApi.isLoading }} type={type} />
      <NewsCard newsData={{ getNewsData: getNewsApi?.data, loader: getNewsApi.isLoading }} />
    </Box>
  );
};
export default Home;