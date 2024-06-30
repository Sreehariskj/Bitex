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
import {ValidLabel} from '../components/ValidLabel';
import {PasswordInput} from '../components/PasswordInput';

const CreatePassword = ({navigation}: any) => {
  const [value, setValue] = useState('');

  const onBtnPress = () => {
    navigation.navigate('ForgetPassword');
  };
  const onInputChange = (text: any) => {
    setValue(text);
  };
  return (
    <AppScreen>
      <Header title="Create Password" />
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
              source={require('../../../assets/images/password.png')}
            />
            {/* INFO SECTION */}
            <View style={styles.infoSection}>
              <AppText style={[styles.infoText]}>
                Choose a secure password that will be
              </AppText>
              <AppText style={[styles.infoText]}>
                easy for you to remember.
              </AppText>
            </View>
            {/* INPUT SECTION */}
            <View style={[styles.inputContainer]}>
              <PasswordInput />
            </View>
            {/* OPTION SECTION */}
            <View style={styles.optionSection}>
              <ValidLabel label="Has at least characters" isActive={true} />
              <ValidLabel
                label="Has an uppercase letter or symbol"
                isActive={true}
              />
              <ValidLabel label="Has at number" isActive={false} />
            </View>
            {/* BUTTON SECTION */}
            <View style={[styles.buttonSection]}>
              {/* Sign in  */}
              <PrimaryButton title="Verify Now" onPress={onBtnPress} />
            </View>
          </View>
        </ScrollView>
      </AppKeyboardAvoidingView>
    </AppScreen>
  );
};

export default CreatePassword;

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
    alignSelf: 'flex-start',
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
