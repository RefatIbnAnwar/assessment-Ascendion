import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./components/PrimaryButton";
import { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  function firstNumberInpurHandler(enteredNumber) {
    setFirstNumber(enteredNumber);
  }

  function secondNumberInputHandler(enteredNumber) {
    setSecondNumber(enteredNumber);
  }

  function resetInputhandler() {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
  }

  function sumHandler() {
    const fNumber = parseFloat(firstNumber);
    const sNumber = parseFloat(secondNumber);

    if (isNaN(fNumber) || isNaN(sNumber)) {
      Alert.alert("Invalid Number!", "Please input a numeric value", [
        { text: "Okay", style: "destructive", onPress: resetInputhandler },
      ]);
      return;
    }
    var sum = fNumber + sNumber;
    setResult(sum.toFixed(2));
    console.log(sum);
  }

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="first number"
        onChangeText={firstNumberInpurHandler}
        value={firstNumber}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="second number"
        onChangeText={secondNumberInputHandler}
        value={secondNumber}
      ></TextInput>
      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPress={sumHandler}>Add</PrimaryButton>
        </View>
      </View>
      <Text style={styles.textStyle}>Total is {result} </Text>
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
    height: 36,
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
