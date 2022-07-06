import * as React from 'react';
import {View, ActivityIndicator} from 'react-native';

const LoadingScreen = () => {
  return (
    <View>
      <ActivityIndicator size="small" />
    </View>
  );
};

export default LoadingScreen;
