import React from 'react';
import Login from './src/pages/login';
import {Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <>
      <PaperProvider>
        <Login />
      </PaperProvider>
    </>
  );
};

export default App;