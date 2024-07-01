import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreatePassword,
  EmailSignIn,
  ForgetPassword,
  Home,
  Location,
  MobileSignIn,
  Notification,
  OtpVerification,
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
      <Stack.Screen name="Home" component={RootDrawer} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
