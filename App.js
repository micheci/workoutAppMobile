// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/LoginScreen";
import ExerciseListScreen from "./components/ExerciseListScreen";
import AddExerciseLogScreen from "./components/AddExercise";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExerciseList">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ExerciseList" component={ExerciseListScreen} />
        <Stack.Screen name="AddExercise" component={AddExerciseLogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
