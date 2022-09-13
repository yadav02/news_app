import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';


const SocailIcons = ({ getSocailIcons }) => {

    return (
        getSocailIcons.map(item => {
            return item === 'fb' ? <FacebookIcon /> :
                item === 'wt' ? <WhatsAppIcon /> :
                    item === 'tel' ? <TelegramIcon /> :
                        item === 'link' ? <LinkedInIcon /> :
                            item === 'tw' ? <TwitterIcon /> :
                                item === 'mail' ? <MailIcon /> : ''
        })
    )
}

export default SocailIcons