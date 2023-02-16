import { Container } from "./styles"

export const IndexCard = () => {
    return (
        <>
            <Container>
                    <h3>Sobre mim</h3>
                    <p>Olá, sou Adryan, 18 Anos, natural de Goianésia, Goiás, mas residente em Brasília-DF.</p>
                    <p>Atuo como Desenvolvedor Full-Stack, com maior aptidão em Front-End desde 2020, onde comecei a aprender ainda no Ensino Médio.</p>
                    <p>Estou em busca de uma oportunidade em TI para ampliar horizontes, meu currículo profissional e carreira como Desenvolvedor.</p>
                    <a href="#Projetos"><p>Ver Projetos</p></a>
                    <a href="#Stack"><p>Ver Tecnologias</p></a>
                    <a href="CurriculoAdryanRodrigues.pdf" download={"CurriculoAdryanRodrigues.pdf"}><p>Baixar Currículo</p></a>
            </Container>
        </>
    )
}
