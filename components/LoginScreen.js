// components/LoginScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { loginUser } from "../api"; // Import the login function

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userData = await loginUser(username, password);
      // Save user data (e.g., token) in local storage or state management here
      // Navigate to Exercise List Screen after successful login
      navigation.navigate("ExerciseList");
    } catch (error) {
      Alert.alert("Login failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
