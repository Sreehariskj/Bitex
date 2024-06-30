import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Color';

export const ToggleSwitch = ({defaultValue}: any) => {
  const [isEnabled, setIsEnabled] = useState(defaultValue);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Switch
      trackColor={{false: '#767577', true: COLORS.PRIMARY}}
      // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor={COLORS.PRIMARY}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
