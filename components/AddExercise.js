import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { addUserExerciseLog } from "../api"; // Adjust the import path if necessary

const AddExerciseLogScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [exerciseId, setExerciseId] = useState("");
  const [exerciseDate, setExerciseDate] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [sets, setSets] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async () => {
    try {
      const newLog = {
        user: { id: parseInt(userId, 10) },
        exercise: { id: parseInt(exerciseId, 10) },
        exerciseDate,
        repetitions: parseInt(repetitions, 10),
        sets: parseInt(sets, 10),
        duration: parseInt(duration, 10),
        notes,
      };

      await addUserExerciseLog(newLog);
      Alert.alert("Success", "Exercise log added successfully");
      navigation.navigate("ExerciseList"); // Navigate back to the previous screen
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>User ID:</Text>
      <TextInput
        style={styles.input}
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
      />
      <Text>Exercise ID:</Text>
      <TextInput
        style={styles.input}
        value={exerciseId}
        onChangeText={setExerciseId}
        keyboardType="numeric"
      />
      <Text>Exercise Date:</Text>
      <TextInput
        style={styles.input}
        value={exerciseDate}
        onChangeText={setExerciseDate}
        placeholder="YYYY-MM-DD"
      />
      <Text>Repetitions:</Text>
      <TextInput
        style={styles.input}
        value={repetitions}
        onChangeText={setRepetitions}
        keyboardType="numeric"
      />
      <Text>Sets:</Text>
      <TextInput
        style={styles.input}
        value={sets}
        onChangeText={setSets}
        keyboardType="numeric"
      />
      <Text>Duration:</Text>
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <Text>Notes:</Text>
      <TextInput style={styles.input} value={notes} onChangeText={setNotes} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
  },
});

export default AddExerciseLogScreen;
