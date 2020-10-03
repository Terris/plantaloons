import React from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AppProvider from "./components/AppProvider";

export default function App() {
  const [ready, setReady] = React.useState(false);

  async function loadResourcesAsync() {
    await Promise.all([
      Font.loadAsync({
        LibreFranklinRegular: require("./assets/fonts/LibreFranklin-Regular.ttf"),
        LibreFranklinItalic: require("./assets/fonts/LibreFranklin-Italic.ttf"),
        LibreFranklinBold: require("./assets/fonts/LibreFranklin-Bold.ttf"),
        VollkornSemiBold: require("./assets/fonts/Vollkorn-SemiBold.ttf"),
        VollkornExtraBold: require("./assets/fonts/Vollkorn-ExtraBold.ttf"),
      }),
    ]);
  }

  if (!ready) {
    return (
      <AppLoading
        startAsync={() => loadResourcesAsync()}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }

  return <AppProvider />;
}
