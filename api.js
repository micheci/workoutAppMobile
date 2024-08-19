import axios from "axios";
import API_URL from "./config";

// Replace with your Spring Boot server URL

// Function to fetch exercises
export const getExercises = async () => {
  try {
    const response = await axios.get(`${API_URL}/exercise/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    throw error;
  }
};
// Add exercise log
export const addUserExerciseLog = async (userExerciseLog) => {
  try {
    console.log("inapi call to add", userExerciseLog);
    const response = await axios.post(
      `${API_URL}/userexercise/add`,
      userExerciseLog,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response, "test");
  } catch (error) {
    console.error("Error adding exercise log:", error);
    throw error;
  }
};
