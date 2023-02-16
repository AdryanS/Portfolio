import React, {useState, useEffect} from "react";
import { ProjectCard } from "./card";

import { ProjectData } from "../../../utils/data";
import { Container } from "./styles";

export const ProjectMain = () => {

  return (
    <Container>
          {ProjectData.map((project) => (
              <ProjectCard
                description={project.description}
                image={project.image}
                nome={project.nome}
                repo={project.repo}
                site={project.site}
                title={project.title}
              />
          ))}
    </Container>
  );
};
