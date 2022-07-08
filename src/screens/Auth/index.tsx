import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import Container from '../../components/Container';
import WText from '../../components/WText';
import WTouchable from '../../components/WTouchable';
import WView from '../../components/WView';
import Colors from '../../themes/Colors';
import {SCREEN_WIDTH} from '../../themes/Constants';
import COUNTRIES, {FLAG_URL} from '../../themes/Countries';
import Images from '../../themes/Images';
import {showMenuOptions} from '../../utils/dialogs';
import Image from 'react-native-fast-image';
import WButton from '../../components/WButton';
import Fonts from '../../themes/Fonts';

const AuthScreen = () => {
  const newCountries = COUNTRIES.map(e => {
    return {...e, label: e.name};
  });

  const [phoneCode, setPhoneCode] = useState<string>('+84');
  const [flagUrl, setFlagUrl] = useState<string>(FLAG_URL);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const onSelectCountry = () => {
    showMenuOptions(
      {
        title: 'Country',
        items: newCountries,
      },
      (index: number) => {
        setPhoneCode(COUNTRIES[index].phoneCode);
        setFlagUrl(
          `https://countryflagsapi.com/png/${COUNTRIES[index].alpha2code}`,
        );
      },
    );
  };

  return (
    <Container>
      <FastImage source={Images.loginImage} style={styles.loginImage} />
      <WView mHoz={24}>
        <WText
          color={Colors.lightBlack}
          type="semi26">{`Get your groceries\nwith nectar`}</WText>
        <WView mTop={15} row alignCenter style={styles.phoneZone}>
          <WTouchable mRight={10} row alignCenter onPress={onSelectCountry}>
            <Image source={{uri: flagUrl}} style={styles.flagImage} />
            <WText mLeft={12} type="medi18" color={Colors.black}>
              {phoneCode}
            </WText>
          </WTouchable>
          <TextInput
            value={phoneNumber}
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor={Colors.black}
            onChangeText={(value: string) => setPhoneNumber(value)}
          />
        </WView>
        <WText textAlign="center" mTop={20} color={Colors.gray} type="semi14">
          Or connect with social media
        </WText>
        <WButton
          title="Continue with Google"
          mTop={20}
          mBottom={10}
          titleType="semi18"
          bgColor={Colors.lightBlue}
          selfCenter
        />
        <WButton
          title="Continue with Facebook"
          titleType="semi18"
          bgColor={Colors.darkblue}
          selfCenter
        />
      </WView>
    </Container>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: SCREEN_WIDTH,
    height: 400,
  },
  flagImage: {
    width: 34,
    height: 24,
  },
  input: {
    padding: 0,
    fontSize: Fonts.size.S18,
    fontFamily: Fonts.type.Medium,
    color: Colors.black,
    flex: 1,
  },
  phoneZone: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    paddingBottom: 10,
  },
});

export default AuthScreen;
