import React from "react";
import styled from "styled-components";
import Title from "../Atoms/Title";

const Root = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  width: 800px;
  height: 400px;
  border: 1px solid #ffd127;
  padding: 2rem;
`;

function Card({ title, children }) {
  return (
    <Root>
      {title ? <Title title={title} /> : ""}
      {children}
    </Root>
  );
}

export default Card;
