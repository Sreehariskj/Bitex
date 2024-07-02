import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen} from '../../components/ui';
import {Header} from '../../components/Header/AppHeader';
import {MainCard} from '../../components/Card/MainCard';
import {hp, wp} from '../../hooks/responsive';
import {SPACING} from '../../constants/Size';
import {MARKET_DATA} from '../../data/card';
import {AppInput} from '../../components/ui/AppInput';
import {COLORS} from '../../constants/Color';

const Market = ({navigation}) => {
  const colors = [
    ['#FAC47F', '#F8A946'],
    ['#FF9BD0', '#FF73AA'],
    ['#C1B2FF', '#9B87FF'],
    ['#FFD5CF', '#FE8270'],
    ['#8DF3ED', '#34D9D1'],
  ];
  const getColors = (ind: number, colors: any[]) => {
    const val = ind % colors.length;
    const color = colors[val];
    return color;
  };
  const onRightPress = () => {
    navigation.navigate('Scanner');
  };
  return (
    <AppScreen>
      <Header
        title={'Market Trends'}
        rightIcon="magnify"
        rightIconColor={COLORS.PRIMARY}
        onRightPress={onRightPress}
      />
      <View style={styles.container}>
        <AppInput placeholder="Search Currency" style={styles.search} />
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={MARKET_DATA}
          renderItem={({item, index}) => (
            <MainCard
              item={item}
              colors={getColors(index, colors)}
              showRightSection
              rightSectionIcon="chevron-down"
            />
          )}
        />
      </View>
    </AppScreen>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(SPACING.MD),
    paddingVertical: hp(12),
  },
  search: {
    height: hp(48),
    marginBottom: hp(15),
  },
});
