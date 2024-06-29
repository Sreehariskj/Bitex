import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Color';
import {hp} from '../../hooks/responsive';

const ImageCard = () => {
  const CARD_SIZE = hp(240);
  return (
    <View style={[styles.container, {width: CARD_SIZE, height: CARD_SIZE}]}>
      <Image
        source={require('../../assets/images/welcome-card.png')}
        style={styles.image}
      />
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.DARK,
    borderRadius: 20,
    justifyContent: 'center',
  },
  image: {
    // width: mp(25),
  },
});
