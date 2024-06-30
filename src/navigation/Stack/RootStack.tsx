import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreatePassword,
  EmailSignIn,
  MobileSignIn,
  OtpVerification,
  Welcome,
} from '../../screens';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="EmailSignIn" component={EmailSignIn} />
      <Stack.Screen name="MobileSignIn" component={MobileSignIn} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
    </Stack.Navigator>
  );
};
