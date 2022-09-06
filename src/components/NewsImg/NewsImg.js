import NoImgFound from "../../image/No_image.svg.webp";
const NewsImg = ({ imgData, styling }) => {
    return (
        <img src={imgData ? imgData : NoImgFound} style={styling} />
    )

}

export default NewsImg