import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, ActivityIndicator, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import Screens
console.log("Importing screens...");
import HomeScreen from "./screens/HomeScreen";
import NoUpComingQuiz from "./screens/NOUPCOMINGQUIZ1";
import QUIZMAINSCREEN1 from "./screens/QUIZMAINSCREEN1";
import OTPSCREEN from "./screens/OTPSCREEN";
import MOBILENOLOGINSCREEN from "./screens/MobileNumberLogin1";
import ONBOARDINGSCREEN from "./screens/ONBOARDINGSCREEN";
import ONBOARDINGSCREEN1 from "./screens/ONBOARDINGSCREEN5";
import ONBOARDINGSCREEN2 from "./screens/ONBOARDINGSCREEN6";
import ONBOARDINGSCREEN3 from "./screens/ONBOARDINGSCREEN8";
import UPCOMINGQUIZLISTSCREEN from "./screens/UPCOMINGQUIZLISTSCREEN";
import LeaderBoardScreen from "./screens/LeaderBoardScreen1";
import USERNAMEEMAILLOGINSCREEN from "./screens/USERNAMEEMAILLOGINSCREEN";
console.log("Screens imported successfully");

const Tab = createBottomTabNavigator();

// Create a fallback error screen
const ErrorScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Error loading screen</Text>
  </View>
);

// Wrap each screen component with error boundary
const withErrorBoundary = (ScreenComponent, screenName) => {
  return (props) => {
    if (!ScreenComponent) {
      console.error(`Screen component ${screenName} is undefined`);
      return <ErrorScreen />;
    }
    
    try {
      return <ScreenComponent {...props} />;
    } catch (error) {
      console.error(`Error rendering ${screenName}:`, error);
      return <ErrorScreen />;
    }
  };
};

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  // Show loading indicator while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Define screens for navigation
  const screens = {
    HomeScreen,
    NoUpComingQuiz,
    QUIZMAINSCREEN1,
    OTPSCREEN,
    MOBILENOLOGINSCREEN,
    ONBOARDINGSCREEN,
    ONBOARDINGSCREEN1,
    ONBOARDINGSCREEN2,
    ONBOARDINGSCREEN3,
    UPCOMINGQUIZLISTSCREEN,
    LeaderBoardScreen,
    USERNAMEEMAILLOGINSCREEN,
  };

  Object.entries(screens).forEach(([name, component]) => {
    console.log(`Screen ${name} is ${component ? 'defined' : 'undefined'}`);
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 1 },
          }}
        >
          {Object.entries(screens).map(([name, Component]) => (
            <Tab.Screen
              key={name}
              name={name}
              component={withErrorBoundary(Component, name)}
              options={{
                tabBarLabel: name, // Adjust this to a more user-friendly label
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
