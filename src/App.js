import React from 'react';
import 'antd/dist/antd.css';
import './index.css';

import { Container } from './components/container';
import { HeaderContainer } from './features/header';
import ConfirmedList from './features/lists/confirmedList';
import WaitingList from './features/lists/waitingList';
import UnconfirmedList from './features/lists/unconfirmedList';

function App() {
  return (
    <>
      <HeaderContainer />
      <Container>
        <ConfirmedList />
        <WaitingList />
        <UnconfirmedList />
      </Container>
    </>
  );
}

export default App;
