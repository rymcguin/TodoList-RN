import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goal}>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
});

export default GoalItem;
