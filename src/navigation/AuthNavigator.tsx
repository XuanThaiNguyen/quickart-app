import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth';
import AppRoutes from './AppRoutes';
import Onboarding from '../screens/Auth/OnboardingScreen';
import {useAppSelector} from '../utils/hooks';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  const {isVisited} = useAppSelector(state => state.app);

  return (
    <Stack.Navigator
      initialRouteName={!isVisited ? AppRoutes.Onboarding : AppRoutes.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.Login} component={Login} />
      <Stack.Screen name={AppRoutes.Onboarding} component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
