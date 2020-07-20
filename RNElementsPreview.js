import {Button, ThemeProvider} from 'react-native-elements';
import React from 'react';
import {Avatar} from 'react-native-elements';


const RNElementsPreview = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};

export default RNElementsPreview;
