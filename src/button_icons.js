import React from 'react';
import { Button, Icon, ThemeProvider, Slider } from 'react-native-elements';
import api from './testFrisbee';

const App = () => {
  api.get('/users').then(console.log).catch(console.error);
  return (
    <ThemeProvider>
      <Button 
        icon={
          <Icon name="face" size={50} color="white" />
        } title="Home"/>
    </ThemeProvider>
    
  );
};

export default App;