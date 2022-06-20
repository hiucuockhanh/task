import React, { createContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextScreen from "./TextScreen";

export const ThemeContext = createContext();
// console.log(ThemeContext)

const WatchScreen = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={toggleTheme}
          style={styles.toggle}
        >
          <Text style={styles.txtToggle}>Toggle {theme} Theme</Text>
        </TouchableOpacity>
        <Text>WatchList!</Text>
        <TextScreen />
      </View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggle: {
    backgroundColor: '#518312',
    borderRadius: 10,
    minHeight: 40,
    width: 250,
  },
  txtToggle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  theme: {
    backgroundColor: 'black',
    color: 'red',
  }
});

export default WatchScreen;
