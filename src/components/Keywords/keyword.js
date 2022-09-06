import Typography from "@mui/material/Typography";

const Keyword = ({ keywords }) => {
    return (
        <Typography variant="h5" sx={{ color: "red" }} pb={1}>
            {keywords}
        </Typography>
    )

}

export default Keyword;