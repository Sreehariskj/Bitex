import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen, AppText} from '../../components/ui';
import {Header} from '../../components/Header/AppHeader';
import QrScanner from '../../components/Camera/QrScanner';
import {COLORS} from '../../constants/Color';
import {PrimaryButton} from '../../components/Button/PrimaryButton';
import {hp, mp} from '../../hooks/responsive';

const CONTAINER_SPACING = hp(20);
const Scanner = ({navigation}) => {
  const onPlaceCode = () => {
    navigation.goBack();
  };
  return (
    <AppScreen style={styles.screen}>
      <Header title="Scan QR code" style={{marginTop: 0}} />
      <View style={styles.section}>
        <AppText style={styles.infoText}>
          Place QR code inside the frame to scan please avoid shake to get
          results quickly
        </AppText>
      </View>
      <View style={styles.qrContainer}>
        <QrScanner />
      </View>
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <PrimaryButton title="Place Code" onPress={onPlaceCode} />
        </View>
      </View>
    </AppScreen>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  btnContainer: {
    width: '50%',
  },
  footer: {
    paddingTop: hp(25),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hp(120),
    backgroundColor: COLORS.BACKGROUND,
    alignItems: 'center',
  },
  qrContainer: {
    position: 'relative',
    // top: 0,
  },
  screen: {
    backgroundColor: 'transparent',
  },
  section: {
    backgroundColor: COLORS.BACKGROUND,
    // height: hp(190),
    alignItems: 'center',
    // position: 'relative',
    // top: 0,
  },
  infoText: {
    // marginTop: CONTAINER_SPACING,
    color: COLORS.NEUTRAL,
    textAlign: 'center',
    width: '70%',
  },
});
