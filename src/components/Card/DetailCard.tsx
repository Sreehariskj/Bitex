import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton} from '../ui/AppButton';
import {AppText} from '../ui';
import {mp, wp} from '../../hooks/responsive';
import {COLORS} from '../../constants/Color';
import {HexagonCard} from './HexagonCard';
import {FONT_WEIGHT} from '../../constants/Size';

export const DetailCard = () => {
  return (
    <AppButton style={[styles.container]}>
      <View style={styles.topLeft}>
        <HexagonCard>
          <Image
            source={require('../../assets/images/group/group-2.png')}
            // style={styles.userImg}
          />
        </HexagonCard>
        <View style={{marginLeft: mp(20)}}>
          <AppText style={styles.titleText}>$40.900.64</AppText>
          <AppText style={styles.planText}>+ $508.20 (+0.31)</AppText>
        </View>
      </View>
    </AppButton>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_BACKGROUND,
    borderRadius: mp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: mp(15),
    paddingHorizontal: mp(20),
    paddingVertical: mp(15),
    width: wp(300),
  },
  planText: {
    color: COLORS.PRIMARY,
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleText: {
    fontSize: mp(18),
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
