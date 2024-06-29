import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
// @ts-ignore
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {hp, mp} from '../../hooks/responsive';
import {COLORS} from '../../constants/Color';

interface CustomProps {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  isPassword?: boolean;
  error?: string;
  iconName?: string;
  iconColor?: string;
}
type Props = CustomProps & TextInputProps;
export const AppInput = ({
  style,
  inputStyle,
  error,
  isPassword = false,
  iconName = 'magnify',
  iconColor = COLORS.TEXT,
  ...rest
}: Props) => {
  return (
    <>
      <View style={[styles.container, style]}>
        <MCIcon name={iconName} size={mp(20)} color={iconColor} />
        <TextInput
          secureTextEntry={isPassword}
          style={[styles.input, inputStyle]}
          placeholderTextColor={COLORS.NEUTRAL}
          {...rest}
        />
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DARK,
    width: '100%',
    height: hp(40),
    borderRadius: mp(25),
    paddingHorizontal: mp(15),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(10),
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    color: COLORS.TEXT,
  },
  error: {
    marginTop: 5,
    color: 'red',
  },
});
