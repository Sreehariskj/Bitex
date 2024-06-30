import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {COLORS} from '../../constants/Color';
import {hp, mp} from '../../hooks/responsive';
// @ts-ignore
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const PhoneNumberInput = ({value, onChange}: any) => {
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <PhoneInput
      codeTextStyle={styles.textColor}
      textInputStyle={[styles.textInput, styles.textColor]}
      containerStyle={styles.inputContainer}
      textContainerStyle={styles.textInputContainer}
      ref={phoneInput}
      renderDropdownImage={
        <MCIcon name="chevron-down" size={mp(18)} color={COLORS.TEXT} />
      }
      value={value}
      defaultCode="US"
      layout="second"
      //   onChangeText={text => {
      //     setValue(text);
      //     console.log('number', value);
      //   }}
      onChangeFormattedText={onChange}
      withDarkTheme
      withShadow
      autoFocus
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.DARK,
    width: '100%',
    height: hp(40),
    borderRadius: mp(25),
  },
  textInputContainer: {
    backgroundColor: COLORS.DARK,
    borderTopRightRadius: mp(25),
    borderBottomRightRadius: mp(25),
  },
  textColor: {
    color: COLORS.TEXT,
  },
  textInput: {
    height: hp(40),
  },
});
