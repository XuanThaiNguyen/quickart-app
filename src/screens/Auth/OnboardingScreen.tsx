import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import WText from '../../components/WText';
import Images from '../../themes/Images';
import Image from 'react-native-fast-image';
import WButton from '../../components/WButton';
import Container from '../../components/Container';
import {SCREEN_WIDTH} from '../../themes/Constants';
import Colors from '../../themes/Colors';
import {StackActions, useNavigation} from '@react-navigation/native';
import AppRoutes from '../../navigation/AppRoutes';
import {useAppDispatch} from '../../utils/hooks';
import {actions as AppActions} from '../../redux/app';

const OnboardingScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const onGetStarted = () => {
    navigation.dispatch(StackActions.replace(AppRoutes.Login));
    dispatch(AppActions.setIsVisited());
  };

  return (
    <Container>
      <ImageBackground
        source={Images.onboardingImage}
        style={styles.onboardingImage}>
        <Image
          source={Images.logoIcon}
          style={styles.logoIcon}
          tintColor={Colors.white}
        />
        <WText
          color={Colors.white}
          center
          type="semi48">{`Welcome\nto our store`}</WText>
        <WText mTop={10} mBottom={30} type="medi16" color={Colors.lightWhite}>
          Get your groceries in as fast as one hour
        </WText>
        <WButton
          title="Get Started"
          w={SCREEN_WIDTH - 45}
          onPress={onGetStarted}
        />
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  onboardingImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  logoIcon: {
    width: 50,
    height: 60,
    marginBottom: 10,
  },
});

export default OnboardingScreen;
