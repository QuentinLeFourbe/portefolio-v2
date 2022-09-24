import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, useTransition } from 'react-spring'
import LoadingSpin from './LoadingSpin';
import { AppContext } from '../../../AppContext';

const Container = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;


function LoadingComponent(props) {
  const [isLoading, setIsLoading] = useState(true);
  const { dataState, dataDispatch } = useContext(AppContext);

  const transition = useTransition(isLoading, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 100, opacity: 0 },
  })

  useEffect(async () => {
    if (isLoading == false)
      return;
    // if (loadingState == false) {
    await new Promise(r => setTimeout(r, 800));
    setIsLoading(false);
    await new Promise(r => setTimeout(r, 500));
    // hideLoading();
    dataDispatch({ type: 'APP_LOADED' })
    // }
  }, [dataState.isAppLoading])

  return (
    <Container>
      {transition((styles, isLoading) => (
        isLoading && <LoadingSpin style={styles} />
      ))}
    </Container>
  )
}

export default LoadingComponent
