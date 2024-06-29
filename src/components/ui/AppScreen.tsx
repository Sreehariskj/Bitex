import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {COLORS} from '../../constants/Color';

type AppScreenProps = PropsWithChildren<{
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  statusBarStyle?: StyleProp<ViewStyle>;
  barStyle: StyleProp<StatusBarStyle>;
}>;

export const AppScreen: React.FC<AppScreenProps> = ({
  children,
  backgroundColor = COLORS.BACKGROUND,
  barStyle = 'light-content',
  style,
  statusBarStyle,
}): JSX.Element => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View
        style={[
          styles.statusBar,
          {backgroundColor: backgroundColor},
          statusBarStyle,
        ]}>
        <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  statusBar: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust as needed for iOS SafeAreaView
  },
});
