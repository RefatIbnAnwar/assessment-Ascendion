import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./Calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 96,
    flex: 1,
    backgroundColor: "#457456",
    alignItems: "center",
    justifyContent: "center",
  },
});
