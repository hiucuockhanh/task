import React, { FunctionComponent, useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const images = [
  "https://cdn.pixabay.com/photo/2022/03/30/14/55/holiday-home-7101309__480.jpg",
  "https://cdn.pixabay.com/photo/2022/04/07/15/13/farming-7117714__480.jpg",
  "https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759__480.jpg",
  "https://cdn.pixabay.com/photo/2021/12/21/13/10/desert-6885229__480.jpg",
];

interface Props {
  items?: string[];
}

const Slide: FunctionComponent<Props> =({items}) => {

  items = images;
  const [slider, setSlider] = useState(0);
  const [toggle, setToggle] = useState("white");

  const toggleHeart = () => {
    if(toggle === 'white') {
      setToggle('rgb(253,74,74)');
    } else {
      setToggle('white');
    }
  }

  const onChange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != slider) {
        setSlider(slide);
      }
    }
  }

    return (
      <View>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {items.map((e, index) => (
            <Image
              key={index}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.absLeft}>
          <Text style={styles.textAbs}>NEW</Text>
        </View>
        <TouchableOpacity onPress={toggleHeart}>
          <View style={[styles.absRight, { backgroundColor: (toggle) }]}>
            <Image
              style={styles.imageRight}
              source={require('../../assets/icon/heart.webp')} />
          </View>
        </TouchableOpacity>
        <View style={styles.absTop}>
          <Image
            style={styles.imageTop}
            source={require('../../assets/icon/share.png')} />
        </View>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={slider == index ? styles.doActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    absLeft: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      backgroundColor: 'black',
      padding: 10,
    },
    absRight: {
      position: 'absolute',
      bottom: 30,
      right: 20,
      borderRadius: 30,
      height: 60,
      width: 60,
    },
    absTop: {
      position: 'absolute',
      top: 20,
      right: 10,
      padding: 10,
    },
    textAbs: {
      fontSize: 18,
      color: 'white',
    },
    imageRight: {
      resizeMode: 'stretch',
      height: 60,
      width: 60,
    },
    imageTop: {
      resizeMode: 'stretch',
      height: 40,
      width: 40,
    },
    wrap: {
      width: WIDTH,
      height: HEIGHT * 0.55,
    },
    wrapDot: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignSelf: 'center',
    },
    doActive: {
      margin: 3,
      color: 'black',
    },
    dot: {
      margin: 3,
      color: 'white',
    },
  });


export default React.memo(Slide);
