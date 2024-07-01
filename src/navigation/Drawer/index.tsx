import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import {Home} from '../../screens';
import {useViewPort} from '../../hooks/responsive';
import {RootTabNavigator} from '../Tab/RootTab';

export const RootDrawer = (): React.JSX.Element => {
  const Drawer = createDrawerNavigator();
  const {setVw} = useViewPort();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: setVw(100),
        },
      }}>
      <Drawer.Screen name="HomeDrawer" component={RootTabNavigator} />
      {/* <Drawer.Screen name="Detail" component={Detail} /> */}

      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
};
