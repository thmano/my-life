import Menu from "../Menu"
import './style.css'
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
 return(
     <div>
          <Menu />
          <div className="display">
            <div className="contact_buttons">
              <Button variant="contained" color="success" startIcon={<WhatsAppIcon />}>
                WhatsApp
              </Button>
              <Button variant="contained" color="primary" startIcon={<LinkedInIcon />}>
                Linkedin
              </Button>
              <Button variant="contained" color="warning">
                thiago_cavalcanti@live.com
              </Button>
            </div>

          </div>
     </div>
 )
}
export default Contact