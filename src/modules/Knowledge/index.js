import Menu from "../Menu"
import './style.css'
import Button from '@mui/material/Button';
import Card from "../../components/Card";
import jsImage from '../../assets/js.png'
import cssImage from '../../assets/css.png'
import htmlImage from '../../assets/html.png'
import vsCodeImage from '../../assets/vs_code.png'
import gitImage from '../../assets/git.png'
import githubImage from '../../assets/github.png'

const Knowledge = () => {
    return(
        <div>
             <Menu />
             <div className="display">
            <h1 className="title">Conhecimentos</h1>
            <p className="text_introduction">Nessa seção teremos todas as tecnologias e conhecimentos em que ja adiquiri durante meu tempo de estudos e trabalho!</p>

            <h3>Tecnologias</h3>
            <div className="technologies">
              <Card src_image={jsImage} title_text={'JavaScript'} />< br/>
              <Card src_image={htmlImage} title_text={'HTML 5'} />< br/>
              <Card src_image={cssImage} title_text={'CSS 3'} />
            </div>

            <h3>Ferramentas</h3>
            <div className="technologies">
              <Card src_image={vsCodeImage} title_text={'VS Code'} />< br/>
              <Card src_image={gitImage} title_text={'Git'} />< br/>
              <Card src_image={githubImage} title_text={'Git Hub'} />
            </div>

          </div>
        </div>
    )
   }
   export default Knowledge