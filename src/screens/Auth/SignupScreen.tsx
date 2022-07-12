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

const SignupScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootAuthStackPrams>>();

  const [username, setUsername] = useState<string>('Thai Nguyen');
  const [email, setEmail] = useState<string>('thainguyen@gmail.com');
  const [password, setPassword] = useState<string>('thainguyen');

  const onSignup = () => {};

  const onLogin = () => navigate(AppRoutes.Login);

  return (
    <Container>
      <FastImage source={Images.logoIcon} style={styles.logoIcon} />
      <WView mHoz={25}>
        <WText type="semi26">Sign Up</WText>
        <WText mBottom={10} mTop={15} type="medi16" color={Colors.gray}>
          Enter your credentials to continue
        </WText>

        <WText mTop={30}>Username</WText>
        <TextInput value={username} style={styles.input} />
        <WText mTop={30}>Email</WText>
        <TextInput value={email} style={styles.input} />
        <WText mTop={30}>Password</WText>
        <TextInput
          value={password}
          secureTextEntry={true}
          style={styles.input}
        />

        <WButton title="Sign Up" onPress={onSignup} mTop={30} selfCenter />
        <WText center mTop={24}>
          Already have an account?
          <WText onPress={onLogin} color={Colors.green}>
            {' '}
            Login
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

export default SignupScreen;
