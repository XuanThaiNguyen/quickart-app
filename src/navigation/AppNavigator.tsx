import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AppRoutes, {RootRoutes} from './AppRoutes';
import LoadingScreen from '../components/Loading';
import ShopScreen from '../screens/Shop';
import AuthStackNavigator from './AuthNavigator';
import OnboardingScreen from '../screens/Auth/OnboardingScreen';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

type AppNavigatorProps = {
  rootRoute: RootRoutes;
};

type RootNavigatorProps = {
  rootRoute: RootRoutes;
};

const AppNavigator = (props: AppNavigatorProps) => {
  return (
    <NavigationContainer theme={navTheme}>
      <RootNavigator rootRoute={props.rootRoute} />
    </NavigationContainer>
  );
};

const RootNavigator = ({rootRoute}: RootNavigatorProps) => {
  switch (rootRoute) {
    case AppRoutes.Loading:
      return <LoadingScreen />;
    case AppRoutes.Login:
      return <AuthStackNavigator />;
    case AppRoutes.Shop:
      return <ShopScreen />;
    default:
      return null;
  }
};

export default AppNavigator;
