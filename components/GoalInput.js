import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(props.enteredGoal);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textbox}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.submit}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <Button title="Cancle" color="red" onPress={props.onCancel} />
          <Button
            title="Submit"
            style={styles.button}
            onPress={() => {
			  props.onAddGoal(enteredGoal);
			  setEnteredGoal('')
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default GoalInput;
