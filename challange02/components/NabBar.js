import React from "react";
import {
  ScrollView,
  Text,
  Pressable,
  StyleSheet,
  View,
  TextInput,
} from "react-native";

const NavBar = () => {
  const navItems = [
    "AEON",
    "Showcase",
    "Docs",
    "Blogs",
    "Analytics",
    "Templates",
    "Enterprise",
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {navItems.map((item, index) => (
          <Pressable key={index} style={styles.navItem}>
            <Text style={styles.navText}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <TextInput
        placeholderTextColor="#767170"
        placeholder="Search documentationz"
        style={styles.textInput}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  scrollContent: {
    paddingHorizontal: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  navItem: {
    marginRight: 1,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  navText: {
    color: "#333",
    fontSize: 16,
  },
  textInput: {
    marginTop: 2,
    marginLeft: 100,
    padding: 8,
    color: "black",
    fontSize: 10,
    height: 32,
    width: "400",
    backgroundColor: "#e3dbd9",
    borderRadius: 4,
  },
});

export default NavBar;
