import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CandlestickChart} from 'react-native-wagmi-charts';

export const CandleChart = ({data}) => {
  return (
    <CandlestickChart.Provider data={data}>
      <CandlestickChart>
        <CandlestickChart.Candles />
      </CandlestickChart>
    </CandlestickChart.Provider>
  );
};

const styles = StyleSheet.create({});
