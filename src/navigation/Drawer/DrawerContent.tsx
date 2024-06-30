// DrawerContent.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {hp, mp} from '../../hooks/responsive';
import {FONT_WEIGHT} from '../../constants/Size';
import {COLORS} from '../../constants/Color';
import {AppScreen, AppText} from '../../components/ui';
import {MenuList} from './MenuList';
import {Header} from '../../components/Header/AppHeader';
import {AppScroll} from '../../components/ui/AppScroll';

const imgSize = mp(50);
const iconSize = mp(30);
const TEXT_COLOR = COLORS.TEXT;
const ACCENT_COLOR = '#1E2230';
export const DrawerContent: React.FC<any> = ({navigation}) => {
  const onBackPress = () => {
    navigation.closeDrawer();
  };
  return (
    <AppScreen>
      <View style={[styles.container, {backgroundColor: COLORS.BACKGROUND}]}>
        <Header title="Settings" onBackPress={onBackPress} />
        <View style={[styles.topContainer]}>
          <View style={styles.topLeft}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={styles.userImg}
            />
            <View>
              <AppText style={styles.userText}>John Smith</AppText>
              <AppText style={styles.planText}>Basic Member</AppText>
            </View>
          </View>
          <Icon name="chevron-right" size={mp(25)} color={TEXT_COLOR} />
        </View>
        <AppScroll>
          <MenuList />
        </AppScroll>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(5),
    paddingHorizontal: mp(15),
  },
  menu: {},
  planText: {
    color: COLORS.PRIMARY,
  },
  topContainer: {
    alignItems: 'center',
    backgroundColor: ACCENT_COLOR,
    borderRadius: mp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: mp(15),
    paddingHorizontal: mp(10),
    paddingVertical: mp(15),
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
    marginRight: mp(15),
  },
  userText: {
    fontSize: mp(18),
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
