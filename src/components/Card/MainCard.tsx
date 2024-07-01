import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppText} from '../ui';
import {hp, mp, wp} from '../../hooks/responsive';
import {FONT_WEIGHT} from '../../constants/Size';
// @ts-ignore
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/Color';
import LinearGradient from 'react-native-linear-gradient';

const ICON_SIZE = mp(20);
export const MainCard = ({item, colors}) => {
  return (
    <LinearGradient colors={colors} style={styles.container}>
      <View style={styles.section}>
        <View style={styles.leftTop}>
          <AppText style={styles.titleText}>{item.title}</AppText>
          <AppText style={styles.titleValueText}>{item.titleValue}</AppText>
        </View>
        <View style={styles.leftBottom}>
          <AppText style={styles.subtitleText}>{item.subtitle}</AppText>
          <AppText style={styles.subtitleValueText}>
            {item.subtitleValue}
          </AppText>
        </View>
      </View>
      <View style={[styles.section]}>
        <View style={styles.info}>
          <AppText>{item.info}</AppText>
          <MCIcon name="chevron-down" size={ICON_SIZE} color={COLORS.TEXT} />
        </View>
        <View style={styles.info}>
          <MCIcon name="menu-down" size={ICON_SIZE} color={COLORS.TEXT} />
          <AppText>{item.detail}</AppText>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAC47F',
    width: wp(300),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: mp(15),
    height: hp(120),
    borderRadius: mp(10),
  },
  info: {
    flexDirection: 'row',
  },
  section: {
    justifyContent: 'space-between',
  },
  titleValueText: {
    fontSize: mp(20),
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    marginTop: mp(5),
  },
  subtitleValueText: {
    // fontSize: mp(21),
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    marginTop: mp(5),
  },
});
