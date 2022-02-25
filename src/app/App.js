import React from 'react';
import { AppProvider } from '../context';
import UI from '../UI';
import '../styles/app.css';

const App = () => {
  return (
    <AppProvider>
      <UI />
    </AppProvider>
  );
}

export default App;
