import {ScrollView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {hp} from '../../hooks/responsive';

type Props = PropsWithChildren<{}>;
export const AppScroll: React.FC<Props> = ({children}) => {
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{paddingBottom: hp(15)}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};
