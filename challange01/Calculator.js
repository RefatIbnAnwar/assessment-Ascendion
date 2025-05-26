import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import PrimaryButton from "./components/PrimaryButton";

function Calculator() {
  function resetInputhandler() {}

  function sumHandler() {}

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="first number"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="second number"
      ></TextInput>
      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPress={sumHandler}>Add</PrimaryButton>
        </View>
      </View>
      <Text style={styles.textStyle}>Total</Text>
    </View>
  );
}

export default Calculator;

const styles = StyleSheet.create({
  textInput: {
    margin: 8,
    padding: 8,
    color: "#4e0329",
    fontSize: 16,
    height: 32,
    width: "300",
    borderBottomWidth: 2,
    borderBottomColor: "#4e0329",
    borderRadius: 4,
    backgroundColor: "#ddb52f",
  },

  textStyle: {
    margin: 4,
    padding: 4,
    fontSize: 24,
    color: "#4e0329",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  singleButtonContainer: {
    flex: 1,
  },
});
