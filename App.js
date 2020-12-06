import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import About from "./components/About";

const App = () => (
    <View style={styles.container}>
      <About></About>
    </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%'
  }
});

export default App;
