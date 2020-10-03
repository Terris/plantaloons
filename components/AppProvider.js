import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Router from "./Router";

const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
};

export default AppProvider;
