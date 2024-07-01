import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppText} from '../../../components/ui';
import {AppButton} from '../../../components/ui/AppButton';
import {mp} from '../../../hooks/responsive';
import {FONT_WEIGHT} from '../../../constants/Size';
import {COLORS} from '../../../constants/Color';

export const SectionHeader = ({title, onPress}: any) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>{title}</AppText>
      <AppButton onPress={onPress}>
        <View>
          <AppText style={styles.infoText}>View All +</AppText>
        </View>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: mp(18),
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  infoText: {
    fontSize: mp(13),
    color: COLORS.NEUTRAL,
  },
});
