import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Color';
import {AppText} from '../ui';

export const DummyComponent = () => {
  return (
    <View style={[styles.container, {backgroundColor: COLORS.BACKGROUND}]}>
      <AppText>{`This is Dummy Screen`}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
