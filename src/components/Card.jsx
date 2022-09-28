import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Content = styled.div``;

const Root = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 800px;
  border: 1px solid #ffd127;
  padding: 2rem;
`;

function Card({ title, children }) {
  return (
    <Root>
      <Title title={title} />
      <Content>{children}</Content>
    </Root>
  );
}

export default Card;
