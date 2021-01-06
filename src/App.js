import React from 'react';
import { SignIn } from './page/SignIn';
import styled from 'styled-components';

const App = () => {
  return (
    <>
        <Layout>
          <SignIn />
        </Layout>
    </>
  )
}

const Layout = styled.div`
  padding: 0;
  height: 100%;
`

export default App;
