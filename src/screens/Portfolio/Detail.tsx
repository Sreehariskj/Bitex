import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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
import {DetailCard} from '../../components/Card/DetailCard';

// @ts-ignore
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppButton} from '../../components/ui/AppButton';
import {RoundButton} from './component/RoundBtn';
import {Category} from './component/Category';
import {InfoCard} from './component/InfoCard';

const CATEGORY_LIST_DATA = ['1H', '1D', '1W', '1M', '6M', '1Y', 'ALL'];
const INFO_LIST_DATA = [
  {id: '1', name: 'Market Cap', value: '20,351.00 BTC'},
  {id: '2', name: 'Volume (24 hours)', value: '$20,351.00'},
  {id: '3', name: 'Market Cap', value: '20,351.00'},
  {id: '4', name: 'Market Cap', value: '20,351.00'},
  {id: '5', name: 'Market Cap', value: '20,351.00'},
  {id: '6', name: 'Market Cap', value: '20,351.00'},
];
const colors = [
  ['#FAC47F', '#F8A946'],
  ['#FF9BD0', '#FF73AA'],
  ['#C1B2FF', '#9B87FF'],
  ['#FFD5CF', '#FE8270'],
  ['#8DF3ED', '#34D9D1'],
];

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
const PortfolioDetail = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORY_LIST_DATA[0],
  );
  const onCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };
  const onHoldPress = () => {};
  const onHourPress = () => {};
  return (
    <AppScreen>
      <Header title={'Bitcoin (BTC)'} rightIcon="heart-outline" />
      <View style={styles.container}>
        {/* CARD SECTION */}
        <View>
          <DetailCard />
        </View>
        {/* BUTTTON SECTION */}
        <View style={styles.buttonSection}>
          <PrimaryButton
            style={styles.button}
            textStyle={styles.buttonText}
            containerStyle={{paddingVertical: 0}}
            title="Global Average"
            onPress={onHoldPress}
          />
          <View>
            <View style={{flexDirection: 'row'}}>
              <RoundButton
                icon="arrow-expand"
                backgroundColor={COLORS.PRIMARY}
              />
              <RoundButton icon="arrow-expand" backgroundColor="#FE8270" />
            </View>
          </View>
        </View>
        {/* SELECTION SECTION */}
        <View style={styles.categoryContainer}>
          {CATEGORY_LIST_DATA.map(item => (
            <Category
              name={item}
              key={item}
              onPress={() => onCategoryPress(item)}
              isActive={item === selectedCategory ? true : false}
            />
          ))}
        </View>
        {/* INFO SECTION */}
        <View style={styles.infoContainer}>
          {INFO_LIST_DATA.map(item => (
            <InfoCard
              key={item.id}
              item={item}
              style={styles.infoCard}
              containerStyle={styles.infoInnerCard}
            />
          ))}
        </View>
        {/* BOTTOM BUTTON SECTION */}
        <View style={styles.buttonSection}>
          <View style={styles.bottomBtn}>
            <PrimaryButton
              colors={['#C1B2FF', '#9B87FF']}
              // style={styles.button}
              // textStyle={styles.buttonText}
              // containerStyle={{paddingVertical: 0}}
              title="Sell"
              onPress={onHoldPress}
            />
          </View>
          <View style={styles.bottomBtn}>
            <PrimaryButton
              // style={styles.button}
              // textStyle={styles.buttonText}
              // containerStyle={{paddingVertical: 0}}
              title="Buy"
              onPress={onHoldPress}
            />
          </View>
        </View>
      </View>
    </AppScreen>
  );
};

export default PortfolioDetail;

const styles = StyleSheet.create({
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'red',
    marginTop: mp(28),
    marginBottom: mp(18),
  },
  bottomBtn: {
    width: '45%',
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
  categoryContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(SPACING.MD),
    paddingVertical: hp(12),
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: mp(20),
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // if you want to fill rows left to right
    // backgroundColor: 'red',
  },
  infoCard: {
    width: '48%',
  },
  infoInnerCard: {
    height: hp(55),
    // marginLeft: mp(15),
    marginBottom: mp(15),
  },
  search: {
    height: hp(48),
    marginBottom: hp(15),
  },
});
