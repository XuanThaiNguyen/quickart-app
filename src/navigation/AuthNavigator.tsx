import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth';
import AppRoutes from './AppRoutes';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
