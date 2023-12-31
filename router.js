import RegistrationScreen from './screens/auth/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen';
import Home from './screens/main/Home';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </HomeStack.Navigator>
  );
};
