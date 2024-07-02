import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton} from '../../../components/ui/AppButton';
import {AppText} from '../../../components/ui';
import {COLORS} from '../../../constants/Color';
import {mp} from '../../../hooks/responsive';
import {FONT_WEIGHT} from '../../../constants/Size';

export const InfoCard = ({item, style, containerStyle}: any) => {
  return (
    <View style={style}>
      <AppButton style={[styles.container, containerStyle]}>
        <View>
          <AppText style={styles.nameText}>{item.name}</AppText>
          <AppText style={styles.valueText}>{item.value}</AppText>
        </View>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    padding: mp(5),
    borderRadius: mp(5),
  },
  nameText: {
    color: COLORS.PRIMARY,
    fontSize: mp(12),
  },
  valueText: {
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
