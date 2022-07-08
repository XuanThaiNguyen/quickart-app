import {PixelRatio, Platform} from 'react-native';
import {BASE_WIDTH, SCREEN_WIDTH} from './Constants';

export const type = {
  Bold: 'Gilroy-Bold',
  Medium: 'Gilroy-Medium',
  SemiBold: 'Gilroy-SemiBold',
};

export function normalize(size: number) {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = scale * size;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const size = {
  S14: normalize(14),
  S16: normalize(16),
  S18: normalize(18),
  S24: normalize(24),
  S26: normalize(26),
  S48: normalize(48),
};

export default {
  size,
  type,
};
