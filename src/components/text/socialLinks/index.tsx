import {Container} from "./styles";
import {AiFigGithub, AiFigInstagram, AiFigLinkedin} from "src/icons";

const SocialLinks = () => {
 return (
    <Container>
        <div className="mgbt"><a href="https://github.com/AdryanS" target="_blank" rel="noreferrer" ><AiFigGithub /></a></div>
        <div className="margin mgbt"><a href="https://www.linkedin.com/in/adryan-samuel" target="_blank" rel="noreferrer"><AiFigLinkedin /></a></div>
        <div className="mgbt"><a href="https://www.instagram.com/adx.adryan/" target="_blank" rel="noreferrer"><AiFigInstagram /></a></div>
    </Container>
 )

}

export default SocialLinks;