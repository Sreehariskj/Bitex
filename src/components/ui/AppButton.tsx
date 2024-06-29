import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {hp, ms} from '../../hooks/responsive';
import {FONT_SIZE, FONT_WEIGHT} from '../../constants/Size';
import {COLORS} from '../../constants/Color';

type AppButtonProps = {
  colors?: string[];
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
};

const AppButton: React.FC<AppButtonProps> = ({
  colors = ['#8DF3ED', '#34D9D1'],
  onPress,
  style,
  textStyle,
  title = '',
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <LinearGradient colors={colors} style={styles.linearGradient}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: '100%',
  },
  linearGradient: {
    borderRadius: 25,
    paddingVertical: ms(3),
  },
  buttonText: {
    // backgroundColor: 'transparent',
    color: COLORS.TEXT,
    fontSize: ms(16),
    fontWeight: FONT_WEIGHT.MEDIUM,
    margin: 10,
    textAlign: 'center',
  },
});
