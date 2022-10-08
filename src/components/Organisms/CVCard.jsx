import React from "react";
import Card from "../Molecules/Card";
import styled from "styled-components";
import PdfIcon from "../../images/icon_pdf.svg";
import CVFile from "../../download/CV.pdf";
import DownloadIcon from "../Atoms/DownloadIcon";

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  margin: 1rem;
`;

const InteractiveCvLink = styled.a`
  all: unset;
  font-size: 64px;
  cursor: pointer;
  text-transform: uppercase;
`;

function CVCard() {
  console.log({ CVFile });
  return (
    <Card title="CV">
      <Content>
        <DownloadIcon file={CVFile} icon={PdfIcon} />
        <InteractiveCvLink href="#">Web</InteractiveCvLink>
      </Content>
    </Card>
  );
}

export default CVCard;
