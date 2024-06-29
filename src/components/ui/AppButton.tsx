import React, {PropsWithChildren, ReactNode} from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  Text,
} from 'react-native';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../../constants/Size';
import {COLORS} from '../../constants/Color';
import {mp} from '../../hooks/responsive';

// Define props type
type AppButtonProps = PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  type?: 'opacity' | 'highlight' | 'withoutFeedback'; // Type of touchable component
  variant?: 'normal' | 'outline' | 'transparent'; // Variant styles for the button
  title?: string; // Optional title for the button
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}>;

// Create the component
export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  type = 'opacity',
  variant = 'transparent',
  title,
  children,
  style,
  textStyle,
}) => {
  const themeColors = {text: COLORS.TEXT, background: COLORS.BACKGROUND};

  const getVariantStyle = (
    variant: 'normal' | 'outline' | 'transparent',
  ): StyleProp<ViewStyle> => {
    switch (variant) {
      case 'normal':
        return {
          backgroundColor: themeColors.text,
          borderWidth: 0,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: themeColors.text,
        };
      case 'transparent':
        return {
          backgroundColor: 'transparent',
          borderRadius: 0,
          borderWidth: 0,
          paddingVertical: 0,
          paddingHorizontal: 0,
        };
      default:
        return {}; // Default style
    }
  };

  // Determine the button content based on 'title' and 'children' props
  const buttonContent = title ? (
    <Text
      style={[
        styles.text,
        {
          color:
            variant === 'transparent'
              ? themeColors.text
              : themeColors.background,
        },
        textStyle,
      ]}>
      {title}
    </Text>
  ) : (
    children
  );

  // Render the appropriate touchable component based on the 'type' prop and apply variant styles
  const renderTouchableComponent = () => {
    let content = (
      // @ts-ignore
      <View style={[styles.button, getVariantStyle(variant), style]}>
        {buttonContent}
      </View>
    );

    switch (type) {
      case 'opacity':
        return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
      case 'highlight':
        return (
          <TouchableHighlight onPress={onPress}>{content}</TouchableHighlight>
        );
      case 'withoutFeedback':
        return (
          <TouchableWithoutFeedback onPress={onPress}>
            {content}
          </TouchableWithoutFeedback>
        );
      default:
        return null; // Handle default case or throw error
    }
  };

  return renderTouchableComponent();
};

// Function to get variant-specific styles

const styles = {
  button: {
    paddingVertical: mp(SPACING.SM),
    paddingHorizontal: mp(SPACING.MD),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: mp(FONT_SIZE.MD),
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
};
