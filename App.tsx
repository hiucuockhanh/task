import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Product from './components/Product/Product';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search!</Text>
    </View>
  );
};

const WatchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WatchList!</Text>
    </View>
  );
};

export const BagScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Baggg!</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home" component={Product}
        options={{tabBarIcon: () => (<Image source={require('./assets/icon/home.png')} style={styles.img}/>)}}
      />
      <Tab.Screen
        name="Search" component={SearchScreen}
        options={{tabBarIcon: () => (<Image source={require('./assets/icon/searchh.jpeg')} style={styles.img}/>)}}
      />
      <Tab.Screen
        name="Watchlist" component={WatchScreen}
        options={{tabBarIcon: () => (<Image source={require('./assets/icon/wishlist1.png')} style={styles.img}/>)}}
      />
      <Tab.Screen
        name="Shopping Bag" component={BagScreen}
        options={{tabBarIcon: () => (<Image source={require('./assets/icon/bagIcon.jpeg')} style={styles.imageBag}/>)}}
      />
      <Tab.Screen
        name="More" component={SettingsScreen}
        options={{tabBarIcon: () => (<Image source={require('./assets/icon/more1.png')} style={styles.img}/>)}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 20,
    height: 20,
  },
  imageBag: {
    height: 28,
    width: 28
  }
});

export default App;
