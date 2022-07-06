import React from 'react';
import {RefreshControlProps, SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../themes/Colors';
import WView from './WView';

type ContainerProps = {
  haveTextInput?: boolean;
  style?: any;
  contentStyle?: any;
  subViewStyle?: any;
  center?: boolean;
  loading?: boolean;
  children?: any;
  disableScrollForContainer?: boolean;
  scrollEnabled?: boolean;
  withoutSafeView?: boolean;
  scrollRef?: any;
  refreshControl?:
    | React.ReactElement<
        RefreshControlProps,
        string | React.JSXElementConstructor<any>
      >
    | undefined;
};

const Container = ({style, children}: ContainerProps) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <WView fill style={style}>
        {children}
      </WView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Container;
