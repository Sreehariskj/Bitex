import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreatePassword,
  EmailSignIn,
  ForgetPassword,
  Home,
  Location,
  Market,
  MobileSignIn,
  Notification,
  OtpVerification,
  Portfolio,
  Profile,
  Welcome,
} from '../../screens';
import {RootDrawer} from '../Drawer';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="EmailSignIn" component={EmailSignIn} />
      <Stack.Screen name="MobileSignIn" component={MobileSignIn} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={RootDrawer} />
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen name="Portfolio" component={Portfolio} />
    </Stack.Navigator>
  );
};
