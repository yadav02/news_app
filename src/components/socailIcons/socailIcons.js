import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';


const SocailIcons = (props) => {

    const socailTips = [{
        'facebook': FacebookIcon,
        'WhatsApp': WhatsAppIcon,
        'Telegram': TelegramIcon,
        'Linkedin': LinkedInIcon,
        'Twitter': TwitterIcon,
        'Mail': MailIcon
    }]
    let data
    return (

        socailTips?.map(item => {
            return (
                props.func(data = { ...item })
            )
        })
    )
}

export default SocailIcons