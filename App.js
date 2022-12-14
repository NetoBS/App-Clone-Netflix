import React from 'react';

import Routes from './src/routes/routes';

import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { StatusBar } from 'react-native';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4db5ff',
      background: '#0a0612',
      placeholder: '#ffffff',
      text: '#ffffff',
    },
  }

  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#000"/>
        <Routes />
      </PaperProvider>
    </>
  );
};

export default App;