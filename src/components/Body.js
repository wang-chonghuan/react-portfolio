// Create your Body component here
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Avatar from "../assets/Software.png";

const Body = () => {
    return(
        <div id="body" className="body">
            <div className="body-container">
                <img className="body-img" alt="avatar" src={Avatar}/>
                <div className="body-content">
                    <div className="body-headline">Walt Want</div>
                    <div className="body-text">Fullstacker</div>
                </div>
                <div className="body-icons">
                    <a className="icon-link" href="https://www.educative.io/"
                       target="_blank" rel="noreferrer">
                        <i><FaGithub/></i>
                    </a>
                    <a className="icon-link" href="https://www.educative.io/"
                        target="_blank" rel="noreferrer" className="icon-link">
                        <i><FaLinkedin/></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Body;