import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {AppText} from '../ui';
import {COLORS} from '../../constants/Color';
import {hp, mp, wp} from '../../hooks/responsive';
import LinearGradient from 'react-native-linear-gradient';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../../constants/Size';

type NotificationCardProp = {
  item: any;
  colors: any;
  style?: StyleProp<ViewStyle>;
};
const IMG_SIZE = mp(20);
const IMG_CONTAINER_SIZE = IMG_SIZE + mp(20);
export const NotificationCard: React.FC<NotificationCardProp> = ({
  colors = [],
  item,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        {/* <View style={styles.imgContainer}> */}
        <LinearGradient colors={colors} style={styles.imgContainer}>
          <Image source={item.image} style={styles.img} resizeMode="contain" />
        </LinearGradient>
        {/* </View> */}
        <View
          style={{
            justifyContent: 'space-between',
            flex: 0.8,
          }}>
          <AppText numberOfLines={1} style={styles.titleText}>
            {item.title}
          </AppText>
          <AppText numberOfLines={1} style={styles.subtitleText}>
            {item.subtitle}
          </AppText>
        </View>
      </View>
      <View style={styles.right}>
        <AppText style={styles.infoText}>{item.info}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.LIGHT_BACKGROUND,
    width: '100%',
    paddingHorizontal: wp(15),
    paddingVertical: hp(25),
    borderRadius: mp(8),
    marginBottom: hp(10),
  },
  left: {
    flexDirection: 'row',
    flex: 1,
  },
  img: {
    height: IMG_SIZE,
    width: IMG_SIZE,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: IMG_CONTAINER_SIZE,
    width: IMG_CONTAINER_SIZE,
    borderRadius: IMG_CONTAINER_SIZE / 2,
    marginRight: wp(12),
  },
  titleText: {
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  subtitleText: {
    fontSize: mp(FONT_SIZE.SM),
    color: COLORS.NEUTRAL,
    // maxWidth: '60%',
  },
  right: {
    // backgroundColor: 'red',
    alignSelf: 'flex-end',
  },
  infoText: {
    color: COLORS.NEUTRAL,
  },
});
