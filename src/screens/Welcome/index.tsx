import {StyleSheet, View} from 'react-native';
import React from 'react';

import {AppScreen} from '../../components/ui/AppScreen';
import ImageCard from './ImageCard';
import {AppText} from '../../components/ui';
import {hp, ms, useViewPort} from '../../hooks/responsive';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../../constants/Size';
import {COLORS} from '../../constants/Color';
import AppButton from '../../components/ui/AppButton';

const Welcome = () => {
  const {setVw} = useViewPort();

  // Logic : Bottom Section
  const onLogin = () => {
    if (__DEV__) {
      console.log('Login');
    }
  };
  const onRegister = () => {
    if (__DEV__) {
      console.log('Register');
    }
  };
  return (
    <AppScreen>
      <View style={styles.container}>
        {/* TOP SECTION */}
        <ImageCard />
        {/* MID SECTION */}
        <View style={styles.midSection}>
          {/* TITLE TEXT */}
          <View style={[styles.textContainer, styles.titleContainer]}>
            <AppText style={styles.titleText}>Welcome to</AppText>
            <AppText style={styles.titleText}>Cryptocurrency</AppText>
          </View>
          {/* DESCRIPTION TEXT */}
          <View style={[styles.textContainer, styles.descriptionContainer]}>
            <AppText style={styles.descriptionText}>
              Deliver your Order around the world
            </AppText>
            <AppText style={styles.descriptionText}>without hesitation</AppText>
          </View>
        </View>
        {/* BOTTOM SECTION */}
        <View style={[styles.bottomSection, {width: setVw(85)}]}>
          <AppButton
            title="Login"
            onPress={onLogin}
            colors={['#C1B2FF', '#9B87FF']}
            style={styles.btnStyle}
          />
          <AppButton
            title="Register"
            onPress={onRegister}
            style={styles.btnStyle}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  bottomSection: {
    width: 250,
  },
  btnStyle: {
    marginTop: ms(20),
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
    fontSize: ms(FONT_SIZE.MD),
    // fontWeight: FONT_WEIGHT.BOLD,
    color: COLORS.NEUTRAL,
  },
  midSection: {
    marginVertical: ms(SPACING.XL),
  },
  textContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: COLORS.PRIMARY,
    fontSize: ms(FONT_SIZE.XXL),
    fontWeight: FONT_WEIGHT.BOLD,
  },
});
