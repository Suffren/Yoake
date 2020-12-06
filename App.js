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
    marginTop: 25,
    padding: 10
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
