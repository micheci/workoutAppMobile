import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { getExercises } from "../api"; // Adjust the import path if necessary

const ExerciseListScreen = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExercises();
        console.log(data, "fetched data");
        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {exercises.length > 0 ? (
        exercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseItem}>
            <Text>Name: {exercise.exerciseName}</Text>
            <Text>Category: {exercise.category} minutes</Text>
            <Text>Description: {exercise.description}</Text>
          </View>
        ))
      ) : (
        <Text>No exercises found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  exerciseItem: {
    marginBottom: 20,
    padding: 10,
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default ExerciseListScreen;
