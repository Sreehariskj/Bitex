import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Color';
import {mp, wp} from '../../hooks/responsive';
import {HexagonCard} from './HexagonCard';
import {AppText} from '../ui';
import LinearGradient from 'react-native-linear-gradient';
import {FONT_WEIGHT} from '../../constants/Size';
// @ts-ignore
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const BalanceCard = ({item, colors1, colors2}: any) => {
  return (
    <View style={styles.container}>
      <View>
        <LinearGradient colors={colors2} style={styles.detailContainer}>
          <AppText style={styles.detailText}>{item.title}</AppText>
          <MCIcon name="chevron-down" size={mp(18)} color={COLORS.TEXT} />
        </LinearGradient>
        <View>
          <AppText style={styles.titleValueText}>{item.titleValue}</AppText>
          <AppText
            style={
              styles.mainText
            }>{`${item.subtitleValue} (${item.detail})`}</AppText>
        </View>
      </View>
      <LinearGradient
        colors={colors1}
        style={[styles.detailContainer, {alignSelf: 'flex-end'}]}>
        <AppText style={styles.detailText}>Add Balance</AppText>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111319',
    padding: mp(15),
    width: wp(320),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: mp(10),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: mp(7),
    paddingVertical: mp(6),
    borderRadius: mp(10),
    height: mp(30),
    // width: '30%',
    // flex: 0.8,
  },
  mainText: {
    fontSize: mp(12),
    color: COLORS.NEUTRAL,
  },
  titleValueText: {
    fontSize: mp(19),
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginVertical: mp(15),
  },
  detailText: {
    fontSize: mp(12),
  },
});
