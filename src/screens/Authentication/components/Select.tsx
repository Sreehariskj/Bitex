import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {hp, mp} from '../../../hooks/responsive';
import {COLORS} from '../../../constants/Color';
import {AppText} from '../../../components/ui';

const BACKGROUND_COLOR = COLORS.DARK;
const TEXT_COLOR = COLORS.TEXT;
type SelectProps = {
  data: any;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};
export const Select: React.FC<SelectProps> = ({
  data = [],
  placeholder = '',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <SelectDropdown
        data={data}
        // defaultValueByIndex={8} // use default value by index or default value
        // defaultValue={'kiss'} // use default value by index or default value
        onSelect={(selectedItem, index) => {
          // console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpen) => {
          return (
            <View style={[styles.dropdownButtonStyle]}>
              <AppText style={styles.dropdownButtonTxtStyle}>
                {selectedItem?.name || placeholder}
              </AppText>
              <Icon
                name={isOpen ? 'menu-up' : 'menu-down'}
                size={mp(25)}
                color={COLORS.TEXT}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={[
                styles.dropdownItemStyle,
                {backgroundColor: isSelected ? TEXT_COLOR : BACKGROUND_COLOR},
              ]}>
              <AppText
                style={[
                  styles.dropdownItemTxtStyle,
                  {color: isSelected ? BACKGROUND_COLOR : TEXT_COLOR},
                ]}>
                {item.name}
              </AppText>
            </View>
          );
        }}
        dropdownStyle={styles.dropdownMenuStyle}
        search
        searchInputStyle={styles.dropdownSearchInputStyle}
        searchInputTxtColor={TEXT_COLOR}
        searchPlaceHolder={'Search here'}
        searchPlaceHolderColor={'#72808D'}
        dropdownOverlayColor="rgba(238,238,238,0.1)"
        //   renderSearchInputLeftIcon={() => {
        //     return <FontAwesome name={'search'} color={'#72808D'} size={18} />;
        //   }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: mp(20),
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#B1BDC8',
    // marginBottom: mp(5),
  },
  dropdownButtonStyle: {
    width: '100%',
    height: hp(40),
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: mp(25),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: mp(15),
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    // fontSize: 18,
    // fontWeight: '500',
    color: TEXT_COLOR,
    // textAlign: 'center',
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: TEXT_COLOR,
    textAlign: 'center',
  },
  dropdownMenuStyle: {
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 8,
  },
  dropdownSearchInputStyle: {
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#B1BDC8',
  },
});
