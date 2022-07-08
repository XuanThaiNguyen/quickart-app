import React from 'react';
import {GestureResponderEvent, StyleSheet, Text} from 'react-native';
import Fonts from '../themes/Fonts';

type WTextProps = {
  type?: string;
  color?: string;
  center?: boolean;
  underLine?: boolean;
  style?: object;
  children?: React.ReactNode;
  mTop?: number;
  mBottom?: number;
  mLeft?: number;
  mRight?: number;
  mHoz?: number;
  mVer?: number;
  fill?: boolean;
  lines?: number;
  lineHeight?: number;
  w?: number | string;
  h?: number | string;
  onPress?: (event: GestureResponderEvent) => void;
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
};

const WText = (props: WTextProps) => {
  const {
    type,
    color,
    center,
    style,
    mTop,
    mBottom,
    mLeft,
    mRight,
    mHoz,
    mVer,
    fill,
    children,
    onPress,
    textAlign,
    lines,
  } = props;
  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[
        styles.normal,
        type && styles[type],
        color && {color},
        center && styles.center,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        fill && styles.fill,
        textAlign && {textAlign: textAlign},
        style,
      ]}
      onPress={onPress && onPress}
      numberOfLines={lines}>
      {children}
    </Text>
  );
};
export const styles: any = StyleSheet.create({
  fill: {
    flex: 1,
  },
  center: {
    textAlign: 'center',
  },
  semi14: {
    fontFamily: Fonts.type.SemiBold,
    fontSize: Fonts.size.S14,
  },
  semi18: {
    fontFamily: Fonts.type.SemiBold,
    fontSize: Fonts.size.S18,
  },
  semi26: {
    fontFamily: Fonts.type.SemiBold,
    fontSize: Fonts.size.S26,
  },
  semi48: {
    fontFamily: Fonts.type.SemiBold,
    fontSize: Fonts.size.S48,
  },
  medi16: {
    fontFamily: Fonts.type.Medium,
    fontSize: Fonts.size.S16,
  },
  medi18: {
    fontFamily: Fonts.type.Medium,
    fontSize: Fonts.size.S18,
  },
});

export default WText;
