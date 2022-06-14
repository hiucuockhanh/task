import React, { FunctionComponent, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const WIDTH = Dimensions.get("window").width;

interface Props {
  decre?: string;
  incre?: string;
  textAdd?: string;
}

const ButtonProduct: FunctionComponent<Props> =
  ({
    decre= '-',
    incre= '+',
    textAdd= 'Add to bag'
  }) =>

  {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.buttonTouchable}>
      <View style={styles.increAndDecre}>
        <TouchableOpacity onPress={decrement}>
          <View style={styles.decrement}>
            <Text style={styles.calLeft}>{decre}</Text>
          </View>
        </TouchableOpacity>
        <TextInput style={styles.display}>{counter}</TextInput>
        <TouchableOpacity onPress={increment}>
          <View style={styles.increment}>
            <Text style={styles.calRight}>{incre}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.buttonAdd}>
            <Image
              style={styles.imgAdd}
              source={require('../../assets/icon/bag.jpeg')}
            />
            <Text style={styles.buttonText}>{textAdd}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTouchable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 82,
    backgroundColor: 'white',
  },
  increAndDecre: {
    width: WIDTH * 0.4,
    backgroundColor: 'rgb(249, 249, 249)',
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  decrement: {
    flex: 1,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'rgb(249, 249, 249)',
    width: 50,
  },
  increment: {
    flex: 1,
    fontSize: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    width: 70,
    backgroundColor: 'rgb(249, 249, 249)',
  },
  calLeft: {
    fontSize: 50,
    color: '#b0acac',
    textAlign: 'center',
    bottom: 6,
  },
  calRight: {
    fontSize: 36,
    color: '#b0acac',
    textAlign: 'center',
  },
  display: {
    width: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonAdd: {
    width: WIDTH * 0.4,
    borderRadius: 10,
    height: 52,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(67, 164, 34)',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgAdd: {
    resizeMode: 'stretch',
    height: 17,
    width: 14,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
})
export default ButtonProduct
