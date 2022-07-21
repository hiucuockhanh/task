import React from "react";
import { Image, StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Product from './Product/Product';
import PostStack from "./PostStack";
import Comments from "./User/Comments";
import WatchScreen from "./Screens/WatchScreen";
import SettingScreen from "./Screens/SettingScreen";

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
          options={{tabBarIcon: () => (<Image source={require('../assets/icon/share_icon.png')} style={styles.img}/>), headerShown: false}}
        />
        <Tab.Screen
          name="Watchlist" component={WatchScreen}
          options={{tabBarIcon: () => (<Image source={require('../assets/icon/wishlist1.png')} style={styles.img}/>)}}
        />
        <Tab.Screen
          name="More" component={SettingScreen}
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
  },
  toggle: {
    backgroundColor: '#518312',
    borderRadius: 10,
    minHeight: 20,
    width: 200,
  },
  txtToggle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  txt: {
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 20,
  }
});

export default Main;
