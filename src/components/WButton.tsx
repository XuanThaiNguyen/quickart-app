import React from 'react';
import {
  StyleSheet,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';
import WTouchable from './WTouchable';
import WText from './WText';
import Colors from '../themes/Colors';
import {SCREEN_WIDTH} from '../themes/Constants';

type WButtonProps = {
  outline?: boolean;
  color?: string;
  style?: object;
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
  disabled?: boolean;
  textStyle?: object;
  title: string;
  titleType?: string;
  onPress?:
    | ((event: object | GestureResponderEvent | null) => void)
    | undefined;
  h?: number | string;
  w?: number | string;
  selfCenter?: boolean;
  loading?: boolean;
  loadingIndicatorColor?: string;
  loadingIndicatorSize?: number;
  secondary?: boolean;
  fill?: boolean;
  bgColor?: string;
};

const WButton = ({
  style,
  disabled,
  textStyle,
  title,
  titleType,
  onPress,
  color,
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
  h,
  w,
  selfCenter,
  loading,
  loadingIndicatorSize,
  fill,
  bgColor,
}: WButtonProps) => {
  return (
    <WTouchable
      style={[
        styles.container,
        fill && styles.fill,
        color && {backgroundColor: color},
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
        h && {height: h},
        w && {width: w},
        selfCenter && styles.selfCenter,
        bgColor && {backgroundColor: bgColor},
        style,
      ]}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator
          color={Colors.white}
          size={loadingIndicatorSize || 20}
        />
      ) : (
        <WText
          type={titleType || 'semi24'}
          color={Colors.white}
          style={textStyle}>
          {title}
        </WText>
      )}
    </WTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    height: 60,
    width: SCREEN_WIDTH - 25,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  fill: {
    flex: 1,
  },
});

WButton.defaultProps = {};

export default WButton;
