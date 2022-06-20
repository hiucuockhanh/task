import { StyleSheet, Text, View } from "react-native";
import React, {useContext} from "react";
import {ThemeContext} from "./WatchScreen";

const TextScreen = () => {
  const theme = useContext(ThemeContext)
  return (
    <View style={theme}>
      <Text style={styles.txt}>This is Context</Text>
      <Text style={styles.txt}>In a typical React application, data is passed top-down (parent to child)
        via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme)
        that are required by many components within an application.
        Context provides a way to share values like these between components without having to explicitly
        pass a prop through every level of the tree.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  // view: {
  //
  // },
  // theme: {
  //
  // }
});

export default TextScreen
