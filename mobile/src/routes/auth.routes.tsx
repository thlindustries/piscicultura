import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* Componentes */
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#E9E9E9' },
      }}
    >
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
