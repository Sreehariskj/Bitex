import {KeyboardAvoidingView, Platform} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {hp} from '../../hooks/responsive';

type Props = PropsWithChildren<{}>;
export const AppKeyboardAvoidingView: React.FC<Props> = ({children}) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={hp(35)}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default AppKeyboardAvoidingView;
