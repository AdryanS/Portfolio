import React from "react";
import { StackCard } from "./card";

import { StackData } from "../../../utils/stack";
import { Container } from "./styles";

export const StackMain = () => {

  return (
    <Container>
          {StackData.map((Stack) => (
            <React.Fragment key={Stack._id}>
              <StackCard
                description={Stack.description}
                image={Stack.image}
                nome={Stack.nome}
                site={Stack.site}
                title={Stack.title}
              />
            </React.Fragment>
          ))}
    </Container>
  );
};
