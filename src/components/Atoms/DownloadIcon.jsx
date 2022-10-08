import React from "react";
import styled from "styled-components";

const DownloadButton = styled.a`
  width: 128px;
  height: 128px;
  border: none;
  background: transparent;
`;

function DownloadIcon({ file, icon }) {
  return (
    <DownloadButton href={file} download>
      <img src={icon}></img>
    </DownloadButton>
  );
}

export default DownloadIcon;
