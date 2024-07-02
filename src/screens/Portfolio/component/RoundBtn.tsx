import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton} from '../../../components/ui/AppButton';
// @ts-ignore
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {mp} from '../../../hooks/responsive';
import {COLORS} from '../../../constants/Color';

export const RoundButton = ({icon, backgroundColor, size = mp(30)}: any) => {
  const containerStyle = {
    height: size,
    width: size,
    borderRadius: size,
    marginLeft: mp(10),
  };
  return (
    <AppButton style={[containerStyle, {backgroundColor}]}>
      <MCIcon name={icon} size={mp(15)} color={COLORS.TEXT} />
    </AppButton>
  );
};

const styles = StyleSheet.create({
  //   ROUND BTN
});
