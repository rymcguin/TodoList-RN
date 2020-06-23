import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
} from "react-native";

import GoalItem  from './components/GoalItem';
import GoalInput  from './components/GoalInput';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalValue) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalValue }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter(goal => goal.id !== goalId);
    })
  }
  const cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }
  

  return (
    <View style={styles.root}>
      <Button title="Add new Goal" onPress ={()=> setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler}  />
      <Text h1 style={{textAlign:'center', fontSize:20}}>To Do List: </Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} value={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
});
