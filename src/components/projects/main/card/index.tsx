import React, { useState } from 'react';
import { AiFigPushLeft } from 'src/icons';

import { Container, PopUp, BlackBackgroundExit } from './styles';

export interface IDataProps{
    _id?: string;
    nome?: string;
    site?: string | null;
    repo?: string;
    image?: any;
    title?: string;
    description?: string;
}

export const ProjectCard = ({description,image,nome,repo,site,title}:IDataProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Container onClick={() => setDisplay(true)}>
          <img src={image} alt="project" />
          <h3>{nome}</h3>
      </Container>

      {
        display && (
          <>
          <BlackBackgroundExit 
          onClick={() => setDisplay(false)}/>
          <PopUp>
            <img src={image} alt="imagem do projeto" />
            <div className='textsProjects'>
              <h2>{nome}</h2>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="buttons">
              <a href={repo}>Repositorio</a>
              {site && <a href={site}>Site</a>}
            </div>
            <div className='ExitPopUp'>
              <button onClick={() => setDisplay(false)}>
                <AiFigPushLeft />
              </button>
            </div>
          </PopUp>
          </>
        )
      }
    </>
  );
}
