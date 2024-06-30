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
import {obscureEmail} from '../../../helper/obscure';
import {Select} from '../components/Select';
import {CITY_DATA, COUNTRY_DATA} from '../../../data/location';

const ForgetPassword = ({navigation}: any) => {
  const [value, setValue] = useState('');

  const onBtnPress = () => {
    navigation.replace('Home');
  };
  const onInputChange = (text: string) => {
    setValue(text);
  };

  return (
    <AppScreen>
      <Header title="Select Location" />
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
              source={require('../../../assets/images/location.png')}
            />

            {/* INPUT SECTION */}
            <View style={[styles.inputContainer]}>
              <Select data={COUNTRY_DATA} placeholder="Select your Country" />
              <Select data={CITY_DATA} placeholder="Select your City" />
            </View>
            {/* BUTTON SECTION */}
            <View style={[styles.buttonSection]}>
              {/* Sign in  */}
              <PrimaryButton title="Continue" onPress={onBtnPress} />
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
