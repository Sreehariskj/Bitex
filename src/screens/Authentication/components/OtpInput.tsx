import {StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import OTPTextView from 'react-native-otp-textinput';
import {COLORS} from '../../../constants/Color';
import {mp} from '../../../hooks/responsive';

const SIZE = mp(60);
export const OtpInput = () => {
  const [otpInput, setOtpInput] = useState<string>('');

  const input = useRef<OTPTextView>(null);

  const clear = () => input.current?.clear();

  const updateOtpText = () => input.current?.setValue(otpInput);

  //   const showTextAlert = () => otpInput && Alert.alert(otpInput);

  //   const handleCellTextChange = async (text: string, i: number) => {
  //     if (i === 0) {
  //       const clippedText = await Clipboard.getString();
  //       if (clippedText.slice(0, 1) === text) {
  //         input.current?.setValue(clippedText, true);
  //       }
  //     }
  //   };
  return (
    <OTPTextView
      ref={input}
      handleTextChange={setOtpInput}
      containerStyle={styles.textInputContainer}
      textInputStyle={styles.roundedTextInput}
      inputCount={4}
      offTintColor="transparent"
      tintColor="transparent"
      //   inputCellLength={2}
    />
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    // marginBottom: 20,
    // backgroundColor: 'red',
  },
  roundedTextInput: {
    backgroundColor: COLORS.DARK,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    color: COLORS.TEXT,
    // borderWidth: 4,
  },
});
