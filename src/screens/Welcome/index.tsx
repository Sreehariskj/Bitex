import {StyleSheet, View} from 'react-native';
import React from 'react';

import {AppScreen} from '../../components/ui/AppScreen';
import ImageCard from './ImageCard';
import {AppText} from '../../components/ui';
import {hp, mp, wp} from '../../hooks/responsive';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../../constants/Size';
import {COLORS} from '../../constants/Color';
import {PrimaryButton} from '../../components/Button/PrimaryButton';
import {AppScroll} from '../../components/ui/AppScroll';

const Welcome = ({navigation}: any) => {
  // Logic : Bottom Section
  const onLogin = () => {
    if (__DEV__) {
      console.log('Login');
    }
    navigation.navigate('EmailSignIn');
  };
  const onRegister = () => {
    if (__DEV__) {
      console.log('Register');
    }
  };
  return (
    <AppScreen>
      <AppScroll>
        <View style={styles.container}>
          {/* TOP SECTION */}
          <ImageCard />
          {/* MID SECTION */}
          <View style={styles.midSection}>
            {/* TITLE TEXT */}
            <View style={[styles.textContainer]}>
              <AppText style={styles.titleText}>Welcome to</AppText>
              <AppText style={styles.titleText}>Cryptocurrency</AppText>
            </View>
            {/* DESCRIPTION TEXT */}
            <View style={[styles.textContainer, styles.descriptionContainer]}>
              <AppText style={styles.descriptionText}>
                Deliver your Order around the world
              </AppText>
              <AppText style={styles.descriptionText}>
                without hesitation
              </AppText>
            </View>
          </View>
          {/* BOTTOM SECTION */}
          <View style={[styles.bottomSection]}>
            <PrimaryButton
              title="Login"
              onPress={onLogin}
              colors={['#C1B2FF', '#9B87FF']}
              style={styles.btnStyle}
            />
            <PrimaryButton
              title="Register"
              onPress={onRegister}
              style={styles.btnStyle}
            />
          </View>
        </View>
      </AppScroll>
    </AppScreen>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  bottomSection: {
    width: wp(260),
  },
  btnStyle: {
    marginTop: mp(20),
  },
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: hp(SPACING.MD),
    // backgroundColor: 'red',
  },
  descriptionContainer: {
    marginTop: SPACING.MD,
  },
  descriptionText: {
    color: COLORS.NEUTRAL,
    fontSize: mp(FONT_SIZE.MD),
    // fontWeight: FONT_WEIGHT.BOLD,
  },
  midSection: {
    marginVertical: mp(SPACING.XL),
  },
  textContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: COLORS.PRIMARY,
    fontSize: mp(FONT_SIZE.XXL),
    fontWeight: FONT_WEIGHT.BOLD,
  },
});
