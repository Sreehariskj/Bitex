import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

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
    fontSize: 16, // add as needed
  },
});
