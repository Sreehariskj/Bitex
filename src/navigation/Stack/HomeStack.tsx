import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Market} from '../../screens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={Home} />
      <Stack.Screen name="Market" component={Market} />
    </Stack.Navigator>
  );
};
