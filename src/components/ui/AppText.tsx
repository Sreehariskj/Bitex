import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {COLORS} from '../../constants/Color';
import {FONT_SIZE} from '../../constants/Size';
import {mp} from '../../hooks/responsive';

type Props = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
  [x: string]: any;
}>;

export const AppText: React.FC<Props> = ({children, style, ...rest}: Props) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: mp(FONT_SIZE.MD), // add as needed
    color: COLORS.TEXT,
  },
});
