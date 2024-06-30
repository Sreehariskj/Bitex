import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MenuCard from './MenuCard';
import {useNavigation} from '@react-navigation/native';
import {hp, mp} from '../../hooks/responsive';
import {AppText} from '../../components/ui';
import {COLORS} from '../../constants/Color';
import {FONT_WEIGHT} from '../../constants/Size';

const TEXT_COLOR = COLORS.TEXT;
const ACCENT_COLOR = COLORS.PRIMARY;
type HeaderMenuProps = {title: string; isActive?: boolean};
const HeaderMenuComponent = ({title, isActive}: HeaderMenuProps) => (
  <View
    style={[
      styles.headerMenu,
      {backgroundColor: isActive ? ACCENT_COLOR : '#272d45'},
    ]}>
    <AppText
      style={[
        styles.headerText,
        {color: isActive ? TEXT_COLOR : ACCENT_COLOR},
      ]}>
      {title}
    </AppText>
  </View>
);

export const MenuList = () => {
  const navigation = useNavigation();
  const accountData = [
    {
      name: 'Change Password',
      iconName: 'lock',
      onPress: () => navigation.navigate('Home'),
      // isToggle: true,
    },
    {
      name: 'Order Management',
      iconName: 'bell-ring',
      onPress: () => navigation.navigate('Home'),
    },
    {
      name: 'Document Management',
      iconName: 'cog',
      onPress: () => navigation.navigate('Home'),
    },
    {
      name: 'Payment',
      iconName: 'credit-card-outline',
      onPress: () => navigation.navigate('Home'),
    },
    {
      name: 'Sign Out',
      iconName: 'exit-to-app',
      onPress: () => navigation.navigate('Home'),
    },
  ];
  const moreOptionData = [
    {
      name: 'Newsletter',
      iconName: 'email-newsletter',
      onPress: () => navigation.navigate('Home'),
      isToggle: true,
      defaultToggleValue: true,
    },
    {
      name: 'Text Message',
      iconName: 'email',
      onPress: () => navigation.navigate('Home'),
      isToggle: true,
    },
    {
      name: 'Phone Call',
      iconName: 'phone-in-talk',
      onPress: () => navigation.navigate('Home'),
      isToggle: true,
    },
    {
      name: 'Currency',
      iconName: 'sack',
      onPress: () => navigation.navigate('Home'),
      detail: '$USD',
    },
    {
      name: 'Language',
      iconName: 'translate',
      onPress: () => navigation.navigate('Home'),
      detail: 'English',
    },
    {
      name: 'Linked Accounts',
      iconName: 'link-variant',
      onPress: () => navigation.navigate('Home'),
      detail: 'Facebook,goo...',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <HeaderMenuComponent title={'Accounts'} isActive={true} />
        {/* <FlatList
          data={accountData}
          renderItem={({item}) => <MenuCard item={item} />}
          keyExtractor={item => item.name}
          style={{marginTop: mp(15)}}
        /> */}
        {/* <View style={{backgroundColor: 'yellow', flex: 1}}> */}
        {accountData.map((item, key) => (
          <MenuCard item={item} key={item.name} />
        ))}
        {/* </View> */}
      </View>
      <View style={{marginTop: mp(10), flex: 1}}>
        <HeaderMenuComponent title={'More Options'} />
        {/* <FlatList
          data={moreOptionData}
          renderItem={({item}) => <MenuCard item={item} />}
          keyExtractor={item => item.name}
          style={{marginTop: mp(15)}}
        /> */}
        {moreOptionData.map((item, key) => (
          <MenuCard item={item} key={item.name} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E2230',
    marginTop: hp(20),
    paddingBottom: hp(20),
    borderRadius: mp(15),
    overflow: 'hidden',
    flex: 1,
  },
  headerMenu: {
    height: hp(40),
    justifyContent: 'center',
    paddingHorizontal: mp(25),
    marginBottom: mp(15),
  },
  headerText: {
    fontSize: mp(18),
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
