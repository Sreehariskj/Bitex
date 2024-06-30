import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Header} from '../../../components/Header/AppHeader';
import {AppScreen, AppText} from '../../../components/ui';
import {hp, mp} from '../../../hooks/responsive';
import {COLORS} from '../../../constants/Color';
import ImageContainer from '../ImageContainer';
import {PrimaryButton} from '../../../components/Button/PrimaryButton';
import AppKeyboardAvoidingView from '../../../components/ui/AppKeyboardAvoidingView';
import {PhoneNumberInput} from '../PhoneInput';
import {AppButton} from '../../../components/ui/AppButton';

const MobileSignIn = ({navigation}: any) => {
  const [value, setValue] = useState('');

  const onSignIn = () => {
    navigation.navigate('OtpVerification', {phone: value});
  };
  const onInputChange = (text: any) => {
    setValue(text);
  };
  return (
    <AppScreen>
      <Header title="Sign in" />
      <AppKeyboardAvoidingView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: hp(15), alignItems: 'center'}}>
          {/* HEADER */}
          <View style={styles.container}>
            {/* IMAGE SECTION */}
            <ImageContainer
              source={require('../../../assets/images/mobile-sign-in.png')}
            />
            {/* INFO SECTION */}
            <View style={styles.infoSection}>
              <AppText style={[styles.infoText]}>
                Simply enter your phone number to login
              </AppText>
              <AppText style={[styles.infoText]}>or create an account.</AppText>
            </View>
            {/* INPUT SECTION */}
            <View style={[styles.inputContainer]}>
              <PhoneNumberInput value={value} onChange={onInputChange} />
            </View>
            {/* Agree SECTION */}
            <View style={styles.agreeSection}>
              <AppText style={[styles.agreeText]}>
                By using our mobile app, you agree to our
              </AppText>
              <View style={styles.agreeBottom}>
                <AppText style={[styles.agreeText]}>and</AppText>
                <AppButton>
                  <AppText style={[styles.notifyText]}>Privacy Policy</AppText>
                </AppButton>
                <AppButton>
                  <AppText style={[styles.notifyText]}>Terms of Use</AppText>
                </AppButton>
              </View>
            </View>
            {/* BUTTON SECTION */}
            <View style={[styles.buttonSection]}>
              {/* Sign in  */}
              <PrimaryButton title="Continue" onPress={onSignIn} />
            </View>
          </View>
        </ScrollView>
      </AppKeyboardAvoidingView>
    </AppScreen>
  );
};

export default MobileSignIn;

const styles = StyleSheet.create({
  buttonSection: {
    width: '100%',
    marginTop: mp(25),
  },
  container: {
    width: '80%',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    // paddingHorizontal: mp(45),
  },
  agreeBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeSection: {
    // alignItems: 'center',
    marginTop: mp(25),
    marginBottom: mp(35),
  },
  agreeText: {
    color: COLORS.NEUTRAL,
  },
  notifyText: {
    color: COLORS.NEUTRAL,
    fontSize: mp(12),
    marginLeft: mp(5),
  },
  infoSection: {
    alignItems: 'center',
    marginBottom: mp(25),
  },
  infoText: {
    color: COLORS.NEUTRAL,
  },
  inputContainer: {
    // backgroundColor: COLORS.DARK,
    width: '100%',
  },
});
