import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function LinkButtonComp({ onPress, titleHere }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{titleHere}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 30,
    backgroundColor: "#ffd60a",
    paddingVertical: 50,
    width: 200,
    borderRadius: 6,
  },
  titleTextStyle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default LinkButtonComp;
