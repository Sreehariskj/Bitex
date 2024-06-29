import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../../screens';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};
