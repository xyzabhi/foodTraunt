import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import OtpScreen from "./screens/OtpScreen";

export default function App() {
  return (
    <>
      {/* <LoginScreen /> */}
      <OtpScreen />
      {/* <MainScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc1e30",
    alignItems: "center",
    justifyContent: "center",
  },
});
