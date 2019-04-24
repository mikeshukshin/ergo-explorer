import React from 'react';
import 'antd/dist/antd.css';
import './index.css';

import { Container } from './components/container';
import UnconfirmedList from './features/lists/unconfirmedList';
import { HeaderContainer } from './features/header';

function App() {
  return (
    <>
      <HeaderContainer />
      <Container>
        <UnconfirmedList />
      </Container>
    </>
  );
}

export default App;
