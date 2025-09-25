import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoal.trim().length === 0) return; // avoid empty goals
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {       
        key: Math.random().toString(), 
        text: enteredGoal,  
   },
    ]);
    setEnteredGoal(''); // clear input after adding
  }

  function removeGoalHandler(goalId) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    
    <View style={styles.container}>
      {/* Banner image at the top */}
      <Image source={require('./assets/banner.jpg')} style={styles.banner} />
      {/* other components can go here */}

      <Text style={styles.title}>My Goal List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add Goal" onPress={addGoalHandler} color="#4CAF50" />
      </View>

      <View style={styles.goalListContainer}>
            <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <GoalItem
            text={item.text}
            onDelete={() => removeGoalHandler(item.key)}
            />
            )}
            />
        
        </View>

        
    </View>


  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // changed to start so banner stays on top
    paddingTop: 40,

  },
  banner: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 3,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 8,
    width: '70%',
    marginRight: 10,
    fontSize: 16,
  },


  scrollContainer: {
    width: '90%',
  },
  goalListContainer: {
    height: 300,
    width: '90%',
    borderWidth: 2,
    borderColor: 'gold',
  }

});