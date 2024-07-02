import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../../components/Header/AppHeader';
import {AppScreen, AppText} from '../../../components/ui';
import {hp, mp, useViewPort} from '../../../hooks/responsive';
import {AppInput} from '../../../components/ui/AppInput';
import {COLORS} from '../../../constants/Color';
import ImageContainer from '../ImageContainer';
import {PrimaryButton} from '../../../components/Button/PrimaryButton';
import {FONT_WEIGHT} from '../../../constants/Size';
import CheckBox from '@react-native-community/checkbox';
import AppKeyboardAvoidingView from '../../../components/ui/AppKeyboardAvoidingView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmailSignIn = ({navigation}: any) => {
  const {setVw} = useViewPort();
  const CONTAINER_SPACING = setVw(80);
  const [checked, setChecked] = useState(false);

  const onSignIn = async () => {
    await AsyncStorage.setItem('@IS_LOGGED_IN', 'true');
    navigation.navigate('MobileSignIn');
  };
  return (
    <AppScreen>
      <Header title="Sign in" />
      <AppKeyboardAvoidingView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: hp(15)}}>
          {/* HEADER */}
          <View style={styles.container}>
            <View style={styles.topContainer}>
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
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox
                      disabled={false}
                      value={checked}
                      tintColor={COLORS.TEXT}
                      tintColors={{false: COLORS.TEXT}}
                      onValueChange={newValue => setChecked(newValue)}
                    />
                    <AppText style={{marginLeft: mp(1)}}>Remember me</AppText>
                  </View>
                  <TouchableOpacity>
                    <AppText style={styles.warningText}>
                      Forget password ?
                    </AppText>
                  </TouchableOpacity>
                </View>
                {/* Sign in  */}
                <PrimaryButton title="Sign In" onPress={onSignIn} />
              </View>
            </View>
            {/* FOOTER SECTION */}
            <View style={styles.footer}>
              <TouchableOpacity style={styles.footerBtn}>
                <AppText style={[styles.footerText]}>
                  Already have not an account?
                </AppText>
                <AppText
                  style={[
                    styles.warningText,
                    styles.footerText,
                    {marginLeft: 8},
                  ]}>
                  Sign up !
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </AppKeyboardAvoidingView>
    </AppScreen>
  );
};

export default EmailSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    // paddingHorizontal: mp(5),
  },
  footer: {
    marginTop: hp(120),
  },
  footerBtn: {
    flexDirection: 'row',
  },
  footerText: {
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  infoTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: mp(20),
    marginTop: mp(5),
  },
  inputContainer: {
    width: '80%',
  },
  topContainer: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    // paddingHorizontal: mp(5),
  },
  warningText: {
    color: COLORS.WARNING,
  },
});
