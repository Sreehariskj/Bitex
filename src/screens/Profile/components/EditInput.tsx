import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppInput} from '../../../components/ui/AppInput';
import {COLORS} from '../../../constants/Color';

export const EditInput = ({onChangeText, ...rest}: any) => {
  return (
    <View>
      <AppInput
        iconColor={COLORS.NEUTRAL}
        iconName="pencil"
        onChangeText={onChangeText}
        isIconRight={true}
        //   onBlur={onBlur}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
