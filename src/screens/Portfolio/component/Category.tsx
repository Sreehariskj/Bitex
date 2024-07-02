import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton} from '../../../components/ui/AppButton';
import {AppText} from '../../../components/ui';
import {mp} from '../../../hooks/responsive';
import {COLORS} from '../../../constants/Color';

export const Category = ({name = '', isActive = false, onPress}: any) => {
  return (
    <AppButton
      style={[styles.container, isActive ? styles.active : styles.btn]}
      onPress={onPress}>
      <AppText>{name}</AppText>
    </AppButton>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: mp(12),
    paddingVertical: mp(4),
    borderRadius: mp(15),
  },
  btn: {},
  active: {
    backgroundColor: COLORS.PRIMARY,
  },
});
