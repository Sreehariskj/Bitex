import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header} from '../../../components/Header';
import {AppScreen, AppText} from '../../../components/ui';
import {hp, mp, useViewPort} from '../../../hooks/responsive';
import {AppInput} from '../../../components/ui/AppInput';
import {COLORS} from '../../../constants/Color';
import ImageContainer from '../ImageContainer';
import {PrimaryButton} from '../../../components/Button/PrimaryButton';
import {FONT_WEIGHT} from '../../../constants/Size';
import AppKeyboardAvoidingView from '../../../components/ui/AppKeyboardAvoidingView';

const EmailSignIn = () => {
  const {setVw} = useViewPort();
  const CONTAINER_SPACING = setVw(80);

  const onSignIn = () => {};
  return (
    <AppScreen>
      {/* HEADER */}
      <Header title="Sign in" />
      <View style={styles.container}>
        {/* IMAGE SECTION */}
        <ImageContainer
          source={require('../../../assets/images/email-sign-in.png')}
        />
        {/* INPUT SECTION */}
        <View style={[styles.inputContainer]}>
          <AppInput
            iconColor={COLORS.DANGER}
            iconName="email"
            placeholder="Email"
            inputMode="email"
            keyboardType="email-address"
          />
          <AppInput
            iconColor={COLORS.DANGER}
            iconName="lock"
            placeholder="Password"
            isPassword
          />
        </View>
        {/* INFO SECTION */}
        <View style={[{width: '82%'}]}>
          <View style={[styles.infoTop]}>
            <View>
              <AppText>Remember me</AppText>
            </View>
            <TouchableOpacity>
              <AppText style={styles.warningText}>Forget password ?</AppText>
            </TouchableOpacity>
          </View>
          {/* Sign in  */}
          <PrimaryButton title="Sign In" onPress={onSignIn} />
        </View>
        {/* FOOTER SECTION */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerBtn}>
            <AppText style={[styles.footerText]}>
              Already have not an account?
            </AppText>
            <AppText
              style={[styles.warningText, styles.footerText, {marginLeft: 8}]}>
              Sign up !
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </AppScreen>
  );
};

export default EmailSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingHorizontal: mp(5),
  },
  footer: {
    position: 'absolute',
    bottom: hp(30),
  },
  footerBtn: {
    flexDirection: 'row',
  },
  footerText: {
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: mp(14),
  },
  inputContainer: {
    width: '80%',
  },
  warningText: {
    color: COLORS.WARNING,
  },
});
