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
  S10: normalize(10),
  S12: normalize(12),
  S14: normalize(14),
  S15: normalize(15),
  S20: normalize(20),
  S32: normalize(32),
  S34: normalize(34),

  // new
  S24: normalize(24),
  S16: normalize(16),
  S48: normalize(48),
};

export default {
  size,
  type,
};
