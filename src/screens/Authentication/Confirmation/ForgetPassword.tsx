import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../../components/Header/AppHeader';
import {AppScreen, AppText} from '../../../components/ui';
import {hp, mp} from '../../../hooks/responsive';
import {COLORS} from '../../../constants/Color';
import ImageContainer from '../ImageContainer';
import {PrimaryButton} from '../../../components/Button/PrimaryButton';
import AppKeyboardAvoidingView from '../../../components/ui/AppKeyboardAvoidingView';
import {FONT_WEIGHT} from '../../../constants/Size';
import {AppInput} from '../../../components/ui/AppInput';
import {obscureEmail} from '../../../helper/obscure';

const ForgetPassword = ({navigation}: any) => {
  const [value, setValue] = useState('');
  const [obscure, setObsure] = useState('');

  const onBtnPress = () => {
    navigation.navigate('Location');
  };
  const onInputChange = (text: string) => {
    setValue(text);
  };
  const onBlur = () => {
    const result = obscureEmail(value);
    setObsure(result);
  };

  return (
    <AppScreen>
      <Header title="Forget Password" />
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
              source={require('../../../assets/images/forget.png')}
            />
            {/* INFO SECTION */}
            <View style={styles.infoSection}>
              <AppText style={[styles.infoText]}>
                We will send a mail to the email address
              </AppText>
              <AppText style={[styles.infoText]}>
                you registered to regain your password
              </AppText>
            </View>
            {/* INPUT SECTION */}
            <View style={[styles.inputContainer]}>
              <AppInput
                iconColor={COLORS.NEUTRAL}
                iconName="email"
                placeholder="johndoe@gmail.com"
                inputMode="email"
                keyboardType="email-address"
                onChangeText={onInputChange}
                value={value}
                onBlur={onBlur}
              />
            </View>
            {/* OPTION SECTION */}
            <View style={styles.optionSection}>
              <AppText style={styles.notifyText}>
                {`${
                  !!obscure ? `Email sent to ${obscure}` : 'Enter valid email !'
                }`}
              </AppText>
            </View>
            {/* BUTTON SECTION */}
            <View style={[styles.buttonSection]}>
              {/* Sign in  */}
              <PrimaryButton title="Send" onPress={onBtnPress} />
            </View>
          </View>
        </ScrollView>
      </AppKeyboardAvoidingView>
    </AppScreen>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  buttonSection: {
    width: '100%',
  },
  container: {
    width: '75%',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    // paddingHorizontal: mp(45),
  },
  notifyText: {
    color: COLORS.DANGER,
    marginTop: mp(6),
  },
  optionTop: {
    alignItems: 'center',
  },
  optionSection: {
    // alignSelf: 'flex-start',
    marginTop: mp(3),
    marginBottom: mp(20),
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
    marginBottom: mp(20),
  },
  infoText: {
    color: COLORS.NEUTRAL,
  },
  inputContainer: {
    // backgroundColor: COLORS.DARK,
    width: '100%',
  },
});
