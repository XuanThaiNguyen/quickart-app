import React, {useEffect, useState} from 'react';
import {StyleSheet, View, StatusBar, Appearance} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import AppRoutes, {RootRoutes} from './navigation/AppRoutes';
import {useAppSelector} from './utils/hooks';

const App = () => {
  const {user} = useAppSelector(state => state.auth);

  const [rootRoute, setRoute] = useState<RootRoutes>(AppRoutes.Loading);
  const colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    if (user) {
      setRoute(AppRoutes.Shop);
    } else {
      setRoute(AppRoutes.Auth);
    }
  }, [user]);

  return (
    <View style={styles.flex}>
      <StatusBar
        barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
      />
      <AppNavigator rootRoute={rootRoute} />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
