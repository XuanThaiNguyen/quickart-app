import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

interface WViewProps extends ViewProps {
  fill?: boolean;
  children?: React.ReactNode;
  row?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  center?: boolean;
  style?: any;
  mTop?: number;
  mBottom?: number;
  mLeft?: number;
  mRight?: number;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  pHoz?: number;
  pVer?: number;
  mHoz?: number;
  mVer?: number;
  color?: string;
  h?: number | string;
  w?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  justifyContent?: string;
  alignItems?: string;
  selfCenter?: boolean;
  absolute?: boolean;
  aTop?: number;
  aBottom?: number;
  aLeft?: number | string;
  aRight?: number;
  tabLabel?: string;
}

const WView = ({
  fill,
  children,
  row,
  alignCenter,
  justifyCenter,
  center,
  style,
  mTop,
  mBottom,
  mLeft,
  mRight,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHoz,
  pVer,
  mHoz,
  mVer,
  color,
  h,
  w,
  borderRadius,
  borderWidth,
  borderColor,
  justifyContent,
  alignItems,
  selfCenter,
  absolute,
  aTop,
  aBottom,
  aRight,
  aLeft,
  ...more
}: WViewProps) => {
  return (
    <View
      style={[
        fill && styles.fill,
        row && styles.row,
        alignCenter && styles.alignCenter,
        justifyCenter && styles.justifyCenter,
        center && styles.center,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        pTop && {paddingTop: pTop},
        pBottom && {paddingBottom: pBottom},
        pLeft && {paddingLeft: pLeft},
        pRight && {paddingRight: pRight},
        pHoz && {paddingHorizontal: pHoz},
        pVer && {paddingVertical: pVer},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        color && {backgroundColor: color},
        h && {height: h},
        w && {width: w},
        borderRadius && {borderRadius: borderRadius},
        borderWidth && {borderWidth: borderWidth},
        borderColor && {borderColor: borderColor},
        justifyContent && {justifyContent: justifyContent},
        alignItems && {alignItems: alignItems},
        selfCenter && styles.selfCenter,
        absolute && {
          ...styles.absolute,
          top: aTop,
          bottom: aBottom,
          right: aRight,
          left: aLeft,
        },
        style && style,
      ]}
      {...more}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fill: {
    flex: 1,
    backgroundColor: 'white',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
  },
});

export default WView;
