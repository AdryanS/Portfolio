import { Container } from "./styles"
import SocialLinks from "./socialLinks/index"

export const Text = () => {
    return (
        <Container>
            <p className="paragraph">Hello, i&lsquo;m</p>
            <h1>Adryan Samuel</h1>
            <h2>Full-Stack Developer</h2>
            <SocialLinks/>
        </Container>
    )
}