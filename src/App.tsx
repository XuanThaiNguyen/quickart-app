import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, Appearance} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import AppRoutes from './navigation/AppRoutes';

const App = () => {
  const [rootRoute, setRoute] = useState(AppRoutes.Login);
  const colorScheme = Appearance.getColorScheme();

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
