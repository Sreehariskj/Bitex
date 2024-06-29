import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Color';
import {useViewPort} from '../../hooks/responsive';

const ImageCard = () => {
  const {setVw, setVh} = useViewPort();
  return (
    <View style={[styles.container, {width: setVw(80), height: setVh(40)}]}>
      <Image source={require('../../assets/images/welcome-card.png')} />
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
});
