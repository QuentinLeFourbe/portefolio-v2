import React from "react";
import Card from "../Molecules/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContactLink = styled.a`
  all: unset;
  font-size: 32px;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover::after {
    top: 0px;
    left: 0px;
  }
`;

function ContactCard() {
  return (
    <Card>
      <Container>
        <ContactLink href="">Contact</ContactLink>
      </Container>
    </Card>
  );
}

export default ContactCard;
