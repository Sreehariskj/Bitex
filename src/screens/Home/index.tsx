import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen} from '../../components/ui';
import {HomeHeader} from '../../components/Header/HomeHeader';

const Home = () => {
  return (
    <AppScreen>
      <HomeHeader />
      <Text>Home</Text>
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({});
