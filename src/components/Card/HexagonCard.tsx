import {StyleProp, StyleSheet, Text, View, ViewProps} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {mp} from '../../hooks/responsive';
import {COLORS} from '../../constants/Color';
import LinearGradient from 'react-native-linear-gradient';

type HexagonCardProps = PropsWithChildren<{
  style?: StyleProp<ViewProps>;
  size?: number;
  colors?: any;
}>;
export const HexagonCard: React.FC<HexagonCardProps> = ({
  children,
  style,
  size = mp(40),
  colors = ['#8DF3ED', '#34D9D1'],
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.container, {width: size, height: size}, style]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mp(8),
    // transform: [{rotate: '20deg'}],
  },
});
