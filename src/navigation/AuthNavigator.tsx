import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../screens/Auth';
import AppRoutes from './AppRoutes';
import Onboarding from '../screens/Auth/OnboardingScreen';
import Login from '../screens/Auth/LoginScreen';
import Signup from '../screens/Auth/SignupScreen';
import {useAppSelector} from '../utils/hooks';

export type RootAuthStackPrams = {
  Auth: undefined;
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootAuthStackPrams>();

const AuthStackNavigator = () => {
  const {isVisited} = useAppSelector(state => state.app);

  return (
    <Stack.Navigator
      initialRouteName={!isVisited ? AppRoutes.Onboarding : AppRoutes.Auth}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.Auth} component={Auth} />
      <Stack.Screen name={AppRoutes.Onboarding} component={Onboarding} />
      <Stack.Screen name={AppRoutes.Login} component={Login} />
      <Stack.Screen name={AppRoutes.Signup} component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
