import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth';
import AppRoutes from './AppRoutes';
import Onboarding from '../screens/Auth/OnboardingScreen';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.Onboarding} component={Onboarding} />
      <Stack.Screen name={AppRoutes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
