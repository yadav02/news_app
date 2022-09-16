import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';



const SocailIcons = ({ getSocailIcons }) => {

    const socailData = {
        'fb': <FacebookIcon />,
        'wt': <WhatsAppIcon />,
        'tel': <TelegramIcon />,
        'link': <LinkedInIcon />,
        'tw': <TwitterIcon />,
        'mail': <MailIcon />
    }


    return (getSocailIcons.map(item => {
        return socailData[item]
    }))
}

export default SocailIcons