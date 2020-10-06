import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Router } from "../Router";

export const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
};
