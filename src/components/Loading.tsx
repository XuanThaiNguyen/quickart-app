import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import WView from './WView';

type LoadingScreenProps = {
  size?: number | 'small' | 'large' | undefined;
};

const LoadingScreen = ({size = 'small'}: LoadingScreenProps) => {
  return (
    <WView>
      <ActivityIndicator size={size} />
    </WView>
  );
};

export default LoadingScreen;
