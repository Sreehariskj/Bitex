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
import {mp} from '../../hooks/responsive';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../../constants/Size';
import {AppText} from '../ui';
import {useNavigation} from '@react-navigation/native';
import {AppButton} from '../ui/AppButton';

type HeaderProps = {
  title: string;
};
const CONTAINER_SPACING = mp(SPACING.MD);
const ICON_SIZE = mp(28);
const ICON_CONTAINER_SIZE = ICON_SIZE + mp(15);

export const Header: React.FC<HeaderProps> = ({title = ''}) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.iconContainer}>
        <AppButton onPress={onBack}>
          <MCIcon
            name="keyboard-backspace"
            color={COLORS.TEXT}
            size={ICON_SIZE}
          />
        </AppButton>
      </View>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // paddingHorizontal: CONTAINER_SPACING,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    minHeight: ICON_CONTAINER_SIZE,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.DARK,
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE / 2,
    position: 'absolute',
    left: CONTAINER_SPACING,
  },
  text: {
    fontSize: FONT_SIZE.XXL,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
