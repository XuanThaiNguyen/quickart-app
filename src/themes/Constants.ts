import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const BASE_WIDTH = 375;
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export default {
  BASE_WIDTH,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
