import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Color';
import {mp, wp} from '../../hooks/responsive';
import {HexagonCard} from './HexagonCard';
import {AppText} from '../ui';
import LinearGradient from 'react-native-linear-gradient';
import {FONT_WEIGHT} from '../../constants/Size';

export const PortfolioCard = ({item, colors1, colors2}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <HexagonCard colors={colors1} size={mp(25)}>
          <Image source={item.image} />
        </HexagonCard>
        <AppText style={styles.mainText}>{item.title}</AppText>
        <LinearGradient colors={colors2} style={styles.detailContainer}>
          <AppText style={styles.detailText}>{item.detail}</AppText>
        </LinearGradient>
      </View>
      <View>
        <AppText style={styles.titleValueText}>{item.titleValue}</AppText>
        <AppText style={styles.mainText}>{item.subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_BACKGROUND,
    padding: mp(15),
    width: wp(150),
    justifyContent: 'center',
    borderRadius: mp(10),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: mp(2),
    borderRadius: mp(10),
    // width: mp(25),
    flex: 0.8,
  },
  mainText: {
    fontSize: mp(12),
    color: COLORS.NEUTRAL,
  },
  titleValueText: {
    fontSize: mp(18),
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginTop: mp(4),
  },
  detailText: {
    fontSize: mp(13),
  },
});
