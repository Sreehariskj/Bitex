import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen, AppText} from '../../components/ui';
import {HomeHeader} from '../../components/Header/HomeHeader';
import {hp, mp, wp} from '../../hooks/responsive';
import {FONT_SIZE, FONT_WEIGHT} from '../../constants/Size';
import {COLORS} from '../../constants/Color';
import {
  CATEGORY_DATA,
  MARKET_DATA,
  PORTFOLIO_DATA,
  WALLET_DATA,
} from '../../data/card';
import {MainCard} from '../../components/Card/MainCard';
import {PortfolioCard} from '../../components/Card/PortfolioCard';
import {getColors} from '../../helper/color';
import {MAIN_CARD_COLORS} from '../../data/color';
import {ItemSeparator} from '../../components/ItemSeparator';
import {SectionHeader} from './component/SectionHeader';
import {CategoryCard} from '../../components/Card/CategoryCard';
import {NotificationCard} from '../../components/Card/NotificationCard';
import {AppScroll} from '../../components/ui/AppScroll';

const Home = () => {
  const onPortfolioPress = () => {};
  return (
    <AppScreen>
      <HomeHeader />
      <AppScroll>
        <View style={styles.container}>
          {/* WELCOME SECTION */}
          <View style={[styles.section, styles.welcomeContainer]}>
            <AppText style={styles.welcomeText}>Hi Alex Smith</AppText>
            <AppText style={styles.greetText}>Good Morning</AppText>
          </View>
          {/* MAIN CARD SECTION */}
          <View style={{marginTop: hp(20), marginBottom: hp(12)}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={WALLET_DATA}
              ItemSeparatorComponent={() => <ItemSeparator width={mp(15)} />}
              renderItem={({item, index}) => (
                <MainCard
                  item={item}
                  colors={getColors(index, MAIN_CARD_COLORS)}
                />
              )}
            />
          </View>
          {/* PROTFOLIO SECTION */}
          <View style={styles.section}>
            <SectionHeader title="Portfolio" onPress={onPortfolioPress} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={PORTFOLIO_DATA}
              ItemSeparatorComponent={() => <ItemSeparator width={mp(10)} />}
              renderItem={({item, index}) => (
                <PortfolioCard
                  item={item}
                  colors1={getColors(index + 1, MAIN_CARD_COLORS)}
                  colors2={getColors(index + 2, MAIN_CARD_COLORS)}
                />
              )}
              style={{marginVertical: mp(20)}}
            />
          </View>
          {/* CATEGORY SECTION */}
          <View style={[styles.section, styles.categoryContainer]}>
            {/* <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={CATEGORY_DATA}
            ItemSeparatorComponent={() => <ItemSeparator width={mp(20)} />}
            renderItem={({item, index}) => (
              <CategoryCard
                item={item}
                colors={getColors(index + 3, MAIN_CARD_COLORS)}
              />
            )}
            style={{marginVertical: mp(20)}}
          /> */}
            {CATEGORY_DATA.map((item, index) => (
              <CategoryCard
                key={index}
                item={item}
                colors={getColors(index + 3, MAIN_CARD_COLORS)}
              />
            ))}
          </View>
          {/* MARKET SECTION */}
          <View style={[styles.section]}>
            <SectionHeader title="Market" onPress={onPortfolioPress} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={MARKET_DATA}
              ItemSeparatorComponent={() => <ItemSeparator width={mp(10)} />}
              renderItem={({item, index}) => (
                <NotificationCard
                  style={styles.notificationCard}
                  item={item}
                  colors={getColors(index + 1, MAIN_CARD_COLORS)}
                  showRightSection={true}
                  rightSectionIcon="chevron-down"
                />
              )}
              style={{marginTop: mp(20)}}
            />
          </View>
        </View>
      </AppScroll>
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(12),
  },
  section: {
    paddingHorizontal: mp(12),
  },
  welcomeContainer: {},
  welcomeText: {
    fontSize: mp(17),
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: COLORS.PRIMARY,
  },
  greetText: {
    fontSize: mp(20),
    fontWeight: FONT_WEIGHT.MEDIUM,
    // color: COLORS.PRIMARY,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: mp(20),
  },
  notificationCard: {
    width: wp(300),
  },
});
