import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen} from '../../components/ui';
import {Header} from '../../components/Header/AppHeader';
import {MainCard} from '../../components/Card/MainCard';
import {hp, mp, wp} from '../../hooks/responsive';
import {SPACING} from '../../constants/Size';
import {PORTFOLIO_DATA} from '../../data/card';
import {AppInput} from '../../components/ui/AppInput';
import {COLORS} from '../../constants/Color';
import {BalanceCard} from '../../components/Card/BalanceCard';
import {PrimaryButton} from '../../components/Button/PrimaryButton';

const Portfolio = ({navigation}) => {
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
  const cardItem = {
    id: '1',
    title: 'BTC/USD',
    titleValue: '$ 60,5874.40',
    subtitle: 'ETH',
    detail: '+15%',
    subtitleValue: '+ $15874.74',
    info: 'USD',
    // image: require('../assets/images/group/group-1.png'),
  };

  const onHoldPress = () => {};
  const onHourPress = () => {};
  const onMainPress = () => {
    navigation.navigate('PortfolioDetail');
  };
  return (
    <AppScreen>
      <Header title={'Portfolio'} rightIcon="dots-vertical" />
      <View style={styles.container}>
        <View>
          <BalanceCard
            item={cardItem}
            colors1={colors[1]}
            colors2={colors[2]}
          />
        </View>
        <View style={styles.buttonSection}>
          <PrimaryButton
            style={styles.button}
            textStyle={styles.buttonText}
            containerStyle={{paddingVertical: 0}}
            title="Highest Holdings"
            onPress={onHoldPress}
          />
          <PrimaryButton
            style={styles.button}
            textStyle={styles.buttonText}
            colors={['#C1B2FF', '#9B87FF']}
            containerStyle={{paddingVertical: 0}}
            title="24 Hours"
            onPress={onHoldPress}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={PORTFOLIO_DATA}
          renderItem={({item, index}) => (
            <MainCard
              item={item}
              colors={getColors(index, colors)}
              showRightSection
              onPress={onMainPress}
            />
          )}
        />
      </View>
    </AppScreen>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'red',
    marginTop: mp(28),
    marginBottom: mp(18),
  },
  button: {
    width: '40%',
    // paddingVertical: mp(1),
    // height: mp(40),
  },
  buttonText: {
    fontSize: mp(14),
    margin: mp(5),
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(SPACING.MD),
    paddingVertical: hp(12),
    alignItems: 'center',
  },
  search: {
    height: hp(48),
    marginBottom: hp(15),
  },
});
