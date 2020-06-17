import React from 'react';
import { SafeAreaView } from 'react-native';

import { FlatButton, OutlineButton, TextButton } from './src/components/';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/theme/';

const App = () => {
  return (
    <SafeAreaView>
      {/* <FlatButton text="Hello ~ Flat" disabled={true} /> */}
      {/* <OutlineButton text="Hello ~ Outline" disabled={false} /> */}
      <ThemeProvider theme={theme}>
        <TextButton text="Hello ~ Text" disabled={false} />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
