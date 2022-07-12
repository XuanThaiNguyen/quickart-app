import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import Container from '../../components/Container';
import WButton from '../../components/WButton';
import WText from '../../components/WText';
import WView from '../../components/WView';
import AppRoutes from '../../navigation/AppRoutes';
import {RootAuthStackPrams} from '../../navigation/AuthNavigator';
import Colors from '../../themes/Colors';
import Images from '../../themes/Images';

const LoginScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootAuthStackPrams>>();

  const [email, setEmail] = useState<string>('thainguyen@gmail.com');
  const [password, setPassword] = useState<string>('thainguyen');

  const onLogin = () => {};

  const onSignup = () => navigate(AppRoutes.Signup);

  return (
    <Container>
      <FastImage source={Images.logoIcon} style={styles.logoIcon} />
      <WView mHoz={25}>
        <WText type="semi26">Loging</WText>
        <WText mBottom={10} mTop={15} type="medi16" color={Colors.gray}>
          Enter your emails and password
        </WText>

        <WText mTop={30}>Email</WText>
        <TextInput value={email} style={styles.input} />
        <WText mTop={30}>Password</WText>
        <TextInput
          value={password}
          secureTextEntry={true}
          style={styles.input}
        />

        <WButton title="Log In" onPress={onLogin} mTop={30} selfCenter />
        <WText center mTop={24}>
          Don't have an account?
          <WText onPress={onSignup} color={Colors.green}>
            {' '}
            Sign up
          </WText>
        </WText>
      </WView>
    </Container>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    width: 48,
    height: 56,
    alignSelf: 'center',
    marginVertical: 100,
  },
  input: {
    color: Colors.lightBlack,
    padding: 0,
  },
});

export default LoginScreen;
