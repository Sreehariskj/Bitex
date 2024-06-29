import {
  Image,
  ImageProps,
  ImageResizeMode,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {hp, mp} from '../../hooks/responsive';

type ImageContainerProps = {
  // @ts-ignore
  style?: StyleProp<ImageStyle>;
  // @ts-ignore
  resizeMode?: ImageResizeMode;
  [x: string]: ImageProps;
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  style,
  resizeMode = 'contain',
  ...rest
}) => {
  return <Image style={styles.image} resizeMode={resizeMode} {...rest} />;
};

export default ImageContainer;

const styles = StyleSheet.create({
  image: {
    marginVertical: hp(55),
    height: hp(150),
  },
});
