import React, { useEffect, useContext, useState } from "react";
import Main from "./Main";
import LoadingComponent from "../Molecules/LoadingComponent";
import ScrollToTop from "../Atoms/ScrollToTop";
import { AppContext } from "../../AppContext";
import styled from "styled-components";
import Header from "../Organisms/Header";

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

function ContentFromRoute() {
  const { dataState } = useContext(AppContext);
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <Container>
      {/* <Header  show={!showLoading} /> */}
      <Header show={true} />
      {isAppLoading ? (
        <LoadingComponent
          isAppLoading={isAppLoading}
          setIsAppLoading={setIsAppLoading}
        />
      ) : (
        <>
          <ScrollToTop />
          <Main />
        </>
      )}
    </Container>
  );
}

export default ContentFromRoute;
