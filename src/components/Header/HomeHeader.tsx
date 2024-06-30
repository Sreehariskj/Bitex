import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// @ts-ignore
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS} from '../../constants/Color';
import {hp, mp} from '../../hooks/responsive';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../../constants/Size';
import {AppText} from '../ui';
import {useNavigation} from '@react-navigation/native';
import {AppButton} from '../ui/AppButton';

type HeaderProps = {};
const CONTAINER_SPACING = mp(SPACING.MD);
const ICON_SIZE = mp(22);
const ICON_CONTAINER_SIZE = ICON_SIZE + mp(15);

export const HomeHeader: React.FC<HeaderProps> = () => {
  const navigation = useNavigation();

  const onDrawer = () => {
    // @ts-ignore
    navigation.toggleDrawer();
  };

  return (
    <View style={[styles.container]}>
      {/* <View style={styles.iconContainer}> */}
      <AppButton onPress={onDrawer}>
        <Image
          source={require('../../assets/images/menu.png')}
          style={styles.menuImg}
        />
      </AppButton>
      {/* </View> */}
      <View style={styles.iconContainer}>
        <AppButton>
          <MCIcon name="bell-outline" color={COLORS.TEXT} size={ICON_SIZE} />
        </AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: CONTAINER_SPACING,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    minHeight: ICON_CONTAINER_SIZE,
    marginTop: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.DARK,
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE * 0.24,
  },
  menuImg: {
    // tintColor: COLORS.NEUTRAL,
  },
  text: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
