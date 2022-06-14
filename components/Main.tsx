import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Product from './Product/Product';
import PostStack from "./PostStack";
import Comments from "./User/Comments";



const WatchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WatchList!</Text>
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

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home" component={Product}
          options={{tabBarIcon: () => (<Image source={require('../assets/icon/home.png')} style={styles.img}/>)}}
        />
        <Tab.Screen
          name="Album" component={PostStack}
          options={{tabBarIcon: () => (<Image source={require('../assets/icon/share_icon.png')} style={styles.img}/>)}}
        />
        <Tab.Screen
          name="Watchlist" component={WatchScreen}
          options={{tabBarIcon: () => (<Image source={require('../assets/icon/wishlist1.png')} style={styles.img}/>)}}
        />
        <Tab.Screen
          name="More" component={SettingsScreen}
          options={{tabBarIcon: () => (<Image source={require('../assets/icon/more1.png')} style={styles.img}/>)}}
        />
        <Tab.Screen
          name="Post" component={Comments}
          options={{tabBarIcon: () => (<Image source={require('../assets/icon/star_corner.png')} style={styles.img}/>)}}
        />
      </Tab.Navigator>
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

export default Main;
