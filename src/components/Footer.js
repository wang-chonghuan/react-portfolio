import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return(
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Contact With Me</h1>
                <p className="footer-contact-access">Email: 123</p>
                <p className="footer-contact-access">Mobile: 123</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.educative.io"><i><FaFacebook/></i></a>
                    <a href="https://www.educative.io"><i><FaInstagram/></i></a>
                    <a href="https://www.educative.io"><i><FaTwitter/></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;