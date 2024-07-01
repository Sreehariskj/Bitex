import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppText} from '../ui';
import {HexagonCard} from './HexagonCard';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {mp} from '../../hooks/responsive';
import {COLORS} from '../../constants/Color';

export const CategoryCard = ({item, colors}: any) => {
  return (
    <View style={styles.container}>
      <HexagonCard size={mp(45)} colors={colors}>
        <MCIcon name={item.icon} size={mp(25)} color={COLORS.TEXT} />
      </HexagonCard>
      <AppText style={styles.text}>{item.name}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  text: {
    fontSize: mp(13),
    marginTop: mp(10),
  },
});
