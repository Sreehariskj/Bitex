import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppScreen} from '../../components/ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../constants/Color';

const Preloader = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getStorage = async () => {
      const isLoggedValue = await AsyncStorage.getItem('@IS_LOGGED_IN');
      const isLoggedIn = JSON.parse(isLoggedValue);
      if (isLoggedIn) {
        navigation.replace('Home');
      } else {
        navigation.replace('Welcome');
      }
    };
    getStorage();
  }, []);
  return (
    <AppScreen>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.TEXT} />
      </View>
    </AppScreen>
  );
};

export default Preloader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
