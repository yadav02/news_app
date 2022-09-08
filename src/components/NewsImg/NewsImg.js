import NoImgFound from "../../image/No_image.svg.webp";
import Typography from "@mui/material/Typography";
const NewsImg = ({ imgData, styling, imgDesc }) => {

    return (
        <>
            <img src={imgData ? imgData : NoImgFound} style={styling} />
            <Typography textAlign={'center'} fontStyle={'italic'}>{imgDesc}</Typography>
        </>
    )

}

export default NewsImg