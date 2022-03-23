import React from "react";

import { ContainerNav, NavBar, NavbuttonHover } from "./styled";
import {
  AiFigPushLeft,
  AiFigHome,
  AiFigHistory,
  AiFigProjects,
  AiFigTec,
} from "../../../icons";

const Navegation: React.FC = () => {
  return (
    <ContainerNav>
      <NavBar>
        <div>
          <AiFigHome />
        </div>
        <div>
          <AiFigHistory />
        </div>
        <div>
          <AiFigProjects />
        </div>
        <div>
          <AiFigTec />
        </div>
      </NavBar>
      <NavbuttonHover>
        <AiFigPushLeft />
      </NavbuttonHover>
    </ContainerNav>
  );
};

export default Navegation;
