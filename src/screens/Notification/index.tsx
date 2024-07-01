import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen} from '../../components/ui';
import {Header} from '../../components/Header/AppHeader';
import {NOTIFICATION_DATA} from '../../data/notification';
import {MainCard} from '../../components/Card/MainCard';
import {hp, wp} from '../../hooks/responsive';
import {SPACING} from '../../constants/Size';

const Notification = () => {
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

  return (
    <AppScreen>
      <Header title={'Notification'} />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={NOTIFICATION_DATA}
          renderItem={({item, index}) => (
            <MainCard item={item} colors={getColors(index, colors)} />
          )}
        />
      </View>
    </AppScreen>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(SPACING.MD),
    paddingVertical: hp(12),
  },
});
