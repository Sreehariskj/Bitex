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
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppButton} from '../ui/AppButton';

type MainCardProp = {
  item: any;
  colors: any;
  style?: StyleProp<ViewStyle>;
  showRightSection?: boolean;
  rightSectionIcon?: string;
  onPress?: () => any;
};
const IMG_SIZE = mp(20);
const IMG_CONTAINER_SIZE = IMG_SIZE + mp(20);
export const MainCard: React.FC<MainCardProp> = ({
  colors = [],
  item,
  style,
  showRightSection = false,
  rightSectionIcon,
  onPress,
}) => {
  const isSuccess = item.info === '+' ? true : false;
  return (
    <AppButton onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.left}>
          {/* <View style={styles.imgContainer}> */}
          <LinearGradient colors={colors} style={styles.imgContainer}>
            <Image
              source={item.image}
              style={styles.img}
              resizeMode="contain"
            />
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
          {showRightSection ? (
            <View style={{justifyContent: 'space-between'}}>
              <AppText style={[styles.titleValueText]}>
                {item.titleValue}
              </AppText>
              <View style={styles.rightDownSection}>
                <MCIcon
                  name={rightSectionIcon}
                  size={mp(21)}
                  color={isSuccess ? COLORS.PRIMARY : COLORS.DANGER}
                />
                <AppText
                  style={[
                    styles.subtitleValueText,
                    {color: isSuccess ? COLORS.PRIMARY : COLORS.DANGER},
                  ]}>
                  {`${item.info} ${item.subtitleValue}`}
                </AppText>
              </View>
            </View>
          ) : (
            item.info && <AppText style={styles.infoText}>{item.info}</AppText>
          )}
        </View>
      </View>
    </AppButton>
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
  titleValueText: {
    fontSize: mp(16),
    // color: COLORS.NEUTRAL,
    // maxWidth: '60%',
  },
  right: {
    // backgroundColor: 'red',
    alignSelf: 'flex-end',
    height: '100%',
  },
  rightDownSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  subtitleValueText: {
    marginLeft: mp(2),
  },
  infoText: {
    color: COLORS.NEUTRAL,
  },
});
