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
import {AppButton} from '../../../components/ui/AppButton';
import {FONT_WEIGHT} from '../../../constants/Size';
import {OtpInput} from '../components/OtpInput';

const OtpVerification = ({route, navigation}: any) => {
  const [value, setValue] = useState('');
  const {phone} = route.params;

  const onSignIn = () => {
    navigation.navigate('CreatePassword');
  };
  const onInputChange = (text: any) => {
    setValue(text);
  };
  return (
    <AppScreen>
      <Header title="OTP Verification" />
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
              source={require('../../../assets/images/otp.png')}
            />
            {/* INFO SECTION */}
            <View style={styles.infoSection}>
              <AppText style={[styles.infoText]}>
                An authentication code has been sent to
              </AppText>
              <AppText style={[styles.infoText]}>{phone}</AppText>
            </View>
            {/* INPUT SECTION */}
            <View style={[styles.inputContainer]}>
              <OtpInput />
            </View>
            {/* OPTION SECTION */}
            <View style={styles.optionSection}>
              <View style={styles.optionTop}>
                <AppText style={[styles.optionText]}>
                  I didn't receive code.
                </AppText>
                <AppButton>
                  <AppText style={[styles.resendText]}>Resend Code</AppText>
                </AppButton>
              </View>
              <View>
                <AppText style={styles.notifyText}>1:20 Sec left</AppText>
              </View>
            </View>
            {/* BUTTON SECTION */}
            <View style={[styles.buttonSection]}>
              {/* Sign in  */}
              <PrimaryButton title="Verify Now" onPress={onSignIn} />
            </View>
          </View>
        </ScrollView>
      </AppKeyboardAvoidingView>
    </AppScreen>
  );
};

export default OtpVerification;

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
  notifyText: {
    color: COLORS.PRIMARY,
    marginTop: mp(6),
  },
  optionTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionSection: {
    alignItems: 'center',
    marginTop: mp(15),
    marginBottom: mp(35),
  },

  optionText: {
    color: COLORS.TEXT,
  },

  resendText: {
    color: COLORS.DANGER,
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginLeft: mp(5),
  },
  infoSection: {
    alignItems: 'center',
    marginBottom: mp(10),
  },
  infoText: {
    color: COLORS.NEUTRAL,
  },
  inputContainer: {
    // backgroundColor: COLORS.DARK,
    width: '100%',
  },
});
