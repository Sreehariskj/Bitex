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
import {mp} from '../../hooks/responsive';
import {FONT_WEIGHT} from '../../constants/Size';
import {COLORS} from '../../constants/Color';

type PrimaryButtonProps = {
  colors?: string[];
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  colors = ['#8DF3ED', '#34D9D1'],
  onPress,
  style,
  containerStyle,
  textStyle,
  title = '',
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <LinearGradient
        colors={colors}
        style={[styles.linearGradient, containerStyle]}>
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
    paddingVertical: mp(3),
  },
  buttonText: {
    // backgroundColor: 'transparent',
    color: COLORS.TEXT,
    fontSize: mp(16),
    fontWeight: FONT_WEIGHT.MEDIUM,
    margin: 10,
    textAlign: 'center',
  },
});
