import React, {useState, useEffect} from "react";
import { ProjectCard } from "./card";

import { ProjectData } from "../../../utils/projetos";
import { Container } from "./styles";

export const ProjectMain = () => {

  return (
    <Container>
          {ProjectData.map((project) => (
            <React.Fragment key={project._id}>
              <ProjectCard
                description={project.description}
                image={project.image}
                nome={project.nome}
                repo={project.repo}
                site={project.site}
                title={project.title}
              />
            </React.Fragment>
          ))}
    </Container>
  );
};
