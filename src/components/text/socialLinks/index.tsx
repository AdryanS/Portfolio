import {Container} from "./styles";
import {AiFigGithub, AiFigInstagram, AiFigLinkedin} from "src/icons";

const SocialLinks = () => {
 return (
    <Container>
        <div><a href="https://github.com/AdryanS" target="_blank"><AiFigGithub /></a></div>
        <div className="margin"><a href="https://www.linkedin.com/in/adryan-samuel" target="_blank"><AiFigLinkedin /></a></div>
        <div><a href="https://www.instagram.com/adx.adryan/" target="_blank"><AiFigInstagram /></a></div>
    </Container>
 )

}

export default SocialLinks;