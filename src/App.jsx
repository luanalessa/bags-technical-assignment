import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Card from './components/Card'
import Description from './components/Description';

function App() {
  return (
    <>
      <GlobalStyle />
      <Card
        title='Revenue Based Financing'
        author='By Lendistry'
        location='Location'
        days='12 days'
      />
      <Description />
    </>
  );
}

export default App;
