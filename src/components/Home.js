import { useEffect } from "react";
import NewsCard from "./NewsCard/NewsCard";
import Box from "@mui/material/Box";
import useApi from "./Hooks/useApi";
import newsApi from '../API/endPointApi'
import newsApi1 from '../API/endPointApi'


const Home = () => {

  const getNewsApi = useApi(newsApi.getNewsData)
  const getNewsApi1 = useApi(newsApi1.getNewsData1)

  useEffect(() => {

    getNewsApi.request()
    getNewsApi1.request()

  }, [])

  getNewsApi?.data.map(item => {

    item['type'] = true
    
  })

  let finalData = [...getNewsApi?.data, ...getNewsApi1?.data]

  return (

    <Box display={"flex"} flexWrap="wrap" pt={5} mt={4}>
      <NewsCard newsData={{ getNewsData: finalData, loader: getNewsApi.isLoading }} />
    </Box>
  );
};
export default Home;