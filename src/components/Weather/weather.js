import { useEffect } from "react"
import useApi from "../Hooks/useApi";
import weatherApi from '../API/endPointApi';
import Box from "@mui/material/Box";
import Loader from "../Loader/Loader";

const Weather = () => {

    const getWeather = useApi(weatherApi.getWeatherData)

    useEffect(() => {
        getWeather.request()
    }, [])

    return (

        <Box display="flex" pl={1} mt={0.5}>
            {getWeather.isLoading ? <Loader /> : (
                <>
                    <Box>
                        <h4>{getWeather.data?.location?.name},</h4>
                    </Box>
                    <Box>
                        <h5>Condition : {getWeather.data?.current?.condition?.text},</h5>
                    </Box>
                    <Box>
                        <h5>Temperature in celsius : {getWeather.data?.current?.temp_c},</h5>
                    </Box>
                    <Box>
                        <h5>Humidity : {getWeather.data?.current?.humidity},</h5>
                    </Box>
                    <Box>
                        <h5>Wind kph : {getWeather.data?.current?.wind_kph}</h5>
                    </Box>
                </>
            )
            }
        </Box>
    )
}

export default Weather