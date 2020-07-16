import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#E9E9E9" />
      <View style={{ backgroundColor: '#E9E9E9', flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
