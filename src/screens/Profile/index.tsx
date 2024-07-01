import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen, AppText} from '../../components/ui';
import {Header} from '../../components/Header/AppHeader';
import {hp, mp} from '../../hooks/responsive';
import {FONT_WEIGHT} from '../../constants/Size';
import {COLORS} from '../../constants/Color';
import {EditInput} from './components/EditInput';
import {PrimaryButton} from '../../components/Button/PrimaryButton';

const IMG_SIZE = mp(40);
const IMG_CONTAINER_SIZE = mp(100);
const Profile = () => {
  const onSave = () => {};
  return (
    <AppScreen>
      <Header title="Profile Details" />
      <View style={styles.container}>
        {/* TOP SECTION */}
        <View style={styles.topSection}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
            resizeMode="cover"
          />
          <AppText style={styles.titleText}>Jhon Smitha</AppText>
          <View style={styles.subtitleContainer}>
            <AppText style={[styles.subtitleText, styles.subtitleLeftText]}>
              Account Credit:
            </AppText>
            <AppText style={[styles.subtitleText, styles.subtitleRightText]}>
              $200.00
            </AppText>
          </View>
        </View>
        {/* BOTTOM SECTION */}
        <View style={styles.bottomSection}>
          <EditInput placeholder="Name" />
          <EditInput placeholder="Phone" />
          <EditInput placeholder="Email" />
          <EditInput
            placeholder="Address"
            multiline={true}
            numberOfLines={3}
            style={styles.addressInput}
          />
          <View style={{marginTop: hp(10)}}>
            <PrimaryButton title="Save Now" onPress={onSave} />
          </View>
        </View>
      </View>
    </AppScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  addressInput: {
    height: hp(50),
  },
  avatar: {
    height: IMG_CONTAINER_SIZE,
    width: IMG_CONTAINER_SIZE,
    borderRadius: IMG_CONTAINER_SIZE / 2,
  },
  bottomSection: {
    width: '70%',
    marginTop: hp(35),
  },
  container: {
    marginTop: hp(40),
    alignItems: 'center',
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  subtitleText: {
    fontSize: mp(17),
    fontWeight: '400',
  },
  subtitleLeftText: {
    color: COLORS.PRIMARY,
  },
  subtitleRightText: {
    color: COLORS.DANGER,
    marginLeft: mp(4),
  },
  topSection: {
    alignItems: 'center',
  },
  titleText: {
    marginVertical: hp(8),
    fontSize: mp(19),
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
