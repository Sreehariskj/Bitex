import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppText} from '../../../components/ui';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {mp} from '../../../hooks/responsive';
import {COLORS} from '../../../constants/Color';

type ValidLabel = {
  label: string;
  isActive: boolean;
};
export const ValidLabel: React.FC<ValidLabel> = ({
  label = '',
  isActive = false,
}) => {
  return (
    <View style={styles.container}>
      <MCIcon
        name="check"
        size={mp(18)}
        color={isActive ? COLORS.PRIMARY : COLORS.TEXT}
      />
      <AppText
        style={[styles.text, {color: isActive ? COLORS.PRIMARY : COLORS.TEXT}]}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: mp(5),
  },
  text: {
    fontSize: mp(12),
    marginLeft: mp(8),
  },
});
