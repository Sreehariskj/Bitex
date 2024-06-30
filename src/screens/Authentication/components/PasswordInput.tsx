import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
// @ts-ignore
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {hp, mp} from '../../../hooks/responsive';
import {COLORS} from '../../../constants/Color';
import {AppText} from '../../../components/ui';
import {AppButton} from '../../../components/ui/AppButton';

interface CustomProps {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  isPassword?: boolean;
  error?: string;
  iconName?: string;
  iconColor?: string;
}
type Props = CustomProps & TextInputProps;
const TEXT_COLOR = COLORS.NEUTRAL;
export const PasswordInput = ({
  style,
  inputStyle,
  isPassword = false,
  iconName = 'magnify',
  iconColor = COLORS.TEXT,
  ...rest
}: Props) => {
  const [visible, setVisible] = useState(false);
  const onIconButton = () => {
    setVisible(prev => !prev);
  };
  return (
    <>
      <View style={[styles.container, style]}>
        <View style={[styles.left]}>
          <AppText style={styles.title}>Password</AppText>
          <TextInput
            secureTextEntry={!visible}
            style={[styles.input, inputStyle]}
            placeholderTextColor={TEXT_COLOR}
            {...rest}
          />
        </View>
        <AppButton style={styles.button} onPress={onIconButton}>
          <MCIcon
            name={visible ? 'eye-off' : 'eye-outline'}
            size={mp(20)}
            color={TEXT_COLOR}
          />
        </AppButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DARK,
    width: '100%',
    height: hp(50),
    borderRadius: mp(35),
    paddingHorizontal: mp(26),
    // paddingVertical: mp(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(10),
  },
  left: {
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: mp(16),
    // paddingLeft: 10,
    color: TEXT_COLOR,
    letterSpacing: mp(3),
    // backgroundColor: 'red',
    paddingVertical: 0,
  },
  button: {
    // backgroundColor: 'red',
    height: '80%',
    width: mp(35),
  },
  title: {
    marginTop: mp(5),
    color: TEXT_COLOR,
  },
});
