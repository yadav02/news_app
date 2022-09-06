import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'border-box',
    '& img': {
      maxWidth: '100%',
      maxHeight: 200,
    },
  },
  single: {
    '& .MuiCardContent-root': {
      display: 'flex',
      '& .MuiBox-root:first-child': {
        width: 220,
        paddingRight: 20,
        '& img': {
          maxWidth: 200,
        },
      },
      '& .MuiBox-root': {
        width: '100%',
      },
    },
  },
  ImgStyle : {
    maxWidth: "100%",
    maxHeight: "250px",
    borderRadius: "7px",
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  NewsImgStyle : {
    width: "200px",
    height: "200px",
    borderRadius: "7px",
  }
}));

export default useStyles;