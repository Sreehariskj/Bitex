import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View} from 'react-native';
import {Home} from '../../screens';
import {hp, mp, useViewPort} from '../../hooks/responsive';
import {SPACING} from '../../constants/Size';
import {COLORS} from '../../constants/Color';
import {HexagonCard} from '../../components/Card/HexagonCard';
import {HomeStack} from '../Stack/HomeStack';

// TAB SCREEN DATA
const TAB_SCREEN_DATA = [
  {
    name: 'Home',
    component: HomeStack,
    iconName: 'home-variant-outline',
  },
  {
    name: 'Wallet',
    component: Home,
    iconName: 'wallet-outline',
  },
  {
    name: 'Add',
    component: Home,
    iconName: 'plus',
  },
  {
    name: 'Chat',
    component: Home,
    iconName: 'forum-outline',
  },
  {
    name: 'Settings',
    component: Home,
    iconName: 'cog-outline',
  },
];

export const RootTabNavigator = () => {
  // Create a bottom tab navigator
  const Tab = createBottomTabNavigator();
  const iconSize = mp(22);
  const {setVw, setVh} = useViewPort();
  return (
    <View
      style={{
        // fix: resolve tab bar pushing itself up when opening keyboard issue
        // width: setVw(100),
        // height: setVh(100),
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
      }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLORS.LIGHT_BACKGROUND,
            height: hp(70),
            borderTopLeftRadius: mp(20),
            borderTopRightRadius: mp(20),
            // borderRadius: mp(SPACING.XXL),
            borderTopWidth: 0,
            overflow: 'hidden',
          },
          // tabBarBackground: tabBarBackground,
        }}>
        {TAB_SCREEN_DATA.map(item => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <>
                  {item.name === 'Add' ? (
                    <HexagonCard>
                      <Icon
                        name={item.iconName}
                        color={COLORS.TEXT}
                        size={iconSize + mp(5)}
                      />
                    </HexagonCard>
                  ) : (
                    <Icon
                      name={item.iconName}
                      color={focused ? COLORS.PRIMARY : COLORS.NEUTRAL}
                      size={iconSize}
                    />
                  )}
                </>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};
