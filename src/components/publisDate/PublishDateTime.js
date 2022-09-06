import moment from "moment"
import Typography from "@mui/material/Typography";

const PublishDateTime = ({datatime}) => {
 
    let newspubDate = moment(datatime).format('MMMM Do YYYY, h:mm:ss a')
    return(
        <Typography sx={{ fontSize: 14, color: "grey" }} gutterBottom>
        {newspubDate}
      </Typography>
    )

}
export default PublishDateTime