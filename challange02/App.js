import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NabBar";

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.line} />
      <Text>Welcome to Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e3dbd9",
    width: "100%",
    marginTop: 40,
  },
});
