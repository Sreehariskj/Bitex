import {
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

type HeaderProps = {
  title: string;
  onBackPress?: () => any;
  rightIcon?: string;
  rightIconColor?: string;
  onRightPress?: () => any;
};
const CONTAINER_SPACING = mp(SPACING.MD);
const ICON_SIZE = mp(28);
const ICON_CONTAINER_SIZE = ICON_SIZE + mp(15);

export const Header: React.FC<HeaderProps> = ({
  title = '',
  onBackPress,
  rightIcon,
  rightIconColor,
  onRightPress,
}) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };
  const isRightIcon = !!rightIcon;
  return (
    <View
      style={[
        styles.container,
        {justifyContent: isRightIcon ? 'space-between' : 'center'},
      ]}>
      <View style={[styles.iconContainer, !isRightIcon && styles.leftIcon]}>
        <AppButton onPress={!!onBackPress ? onBackPress : onBack}>
          <MCIcon
            name="keyboard-backspace"
            color={COLORS.TEXT}
            size={ICON_SIZE}
          />
        </AppButton>
      </View>
      <AppText style={styles.text}>{title}</AppText>
      {
        !!rightIcon && (
          <View style={styles.iconContainer}>
            <AppButton onPress={onRightPress}>
              <MCIcon
                name={rightIcon}
                color={rightIconColor ? rightIconColor : COLORS.TEXT}
                size={ICON_SIZE}
              />
            </AppButton>
          </View>
        )
        //  : (
        //   <View style={styles.dummy}></View>
        // )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  dummy: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flexDirection: 'row',
    // paddingHorizontal: CONTAINER_SPACING,
    // justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    minHeight: ICON_CONTAINER_SIZE,
    marginTop: 5,
    paddingHorizontal: mp(6),
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.DARK,
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE / 2,
  },
  leftIcon: {
    position: 'absolute',
    left: CONTAINER_SPACING,
  },
  text: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
