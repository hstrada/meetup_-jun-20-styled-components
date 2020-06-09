import React from 'react';
import { SafeAreaView } from 'react-native';

import { FlatButton } from './src/components/';

const App = () => {
  return (
    <SafeAreaView>
      <FlatButton text="Hello ~ World" disabled={true} />
    </SafeAreaView>
  );
};

export default App;
