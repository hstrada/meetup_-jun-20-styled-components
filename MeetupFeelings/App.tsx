import React from 'react';
import { SafeAreaView } from 'react-native';

import { FlatButton } from './src/components/';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/theme/';

const App = () => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1, margin: '2%' }}>
      <ThemeProvider theme={theme}>
        <FlatButton
          onPress={() => console.log('Hello World')}
          variant="secondary"
          disabled={false}
          loading={false}
          text="Press Me"
        />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
