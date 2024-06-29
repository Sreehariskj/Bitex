import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {hp, mp} from '../../hooks/responsive';

type ImageContainerProps = {
  // @ts-ignore
  style?: StyleProp<ImageStyle>;
  [x: string]: ImageProps;
};

const ImageContainer: React.FC<ImageContainerProps> = ({style, ...rest}) => {
  return <Image style={styles.image} {...rest} />;
};

export default ImageContainer;

const styles = StyleSheet.create({
  image: {
    marginVertical: mp(55),
  },
});
