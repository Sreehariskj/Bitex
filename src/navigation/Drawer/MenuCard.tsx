import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/Color';
import {mp} from '../../hooks/responsive';
import {AppText} from '../../components/ui';
import {FONT_SIZE, SPACING} from '../../constants/Size';
import {ToggleSwitch} from '../../components/Button/ToggleSwitch';

interface Props {
  name: string;
  onPress: () => void;
  iconName: string;
}
const TEXT_COLOR = COLORS.TEXT;

const MenuCard = ({item}: {item: Props}) => {
  const {
    name,
    onPress,
    iconName,
    isToggle = false,
    defaultToggleValue = false,
    detail,
    hideRightIcon = false,
  } = item;
  return (
    <TouchableHighlight
      underlayColor={COLORS.NEUTRAL}
      onPress={onPress}
      style={[styles.container, {borderBottomColor: COLORS.NEUTRAL}]}>
      <View style={styles.card}>
        <View style={[styles.side]}>
          <Icon name={iconName} size={mp(20)} color={COLORS.TEXT} />
          <AppText style={[styles.text]}>{name}</AppText>
        </View>
        {isToggle ? (
          <ToggleSwitch defaultValue={defaultToggleValue} />
        ) : (
          <View style={[styles.side]}>
            {!!detail && <AppText style={styles.detailText}>{detail}</AppText>}
            {!hideRightIcon && (
              <Icon name="chevron-right" size={mp(25)} color={TEXT_COLOR} />
            )}
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  container: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingVertical: mp(5),
    paddingHorizontal: mp(12),
    marginBottom: mp(4),
    // borderBottomWidth: 1,
    // backgroundColor: 'yellow',
  },
  detailText: {
    fontSize: mp(FONT_SIZE.XS),
    color: COLORS.NEUTRAL,
  },
  side: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: mp(14),
    marginLeft: mp(SPACING.MD),
  },
});
