import React, {FunctionComponent} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View, VirtualizedList,
} from "react-native";
import Slide from "./Slide";
import AboutProduct from "./AboutProduct";
import ButtonProduct from "./ButtonProduct";
import ProductItem from "./ProductItem";
import ListProduct from "./ListProduct";

interface Props {
  name: string;
  image: string[];
  quantity: number;
  model: string;
  description: string;
  review: string;
}

const Product: FunctionComponent<Props> = () => {

  const database = [1, 2, 3, 4, 5];

  const getItem = (data: any, index: number) => {
    if (index === 0) {
      return <Slide />
    }
    if (index === 1) {
      return <ProductItem />
    }
    if (index === 2) {
      return <ButtonProduct />
    }
    if (index === 3) {
      return <AboutProduct />
    }
    if (index === 4) {
      return <ListProduct />
    }
  }

  return (
    <SafeAreaView style={styles.primary}>

      <VirtualizedList
        renderItem={({item, index}) => <View key={index}>{item}</View>}
        data={database}
        getItem={getItem}
        getItemCount={item => item.length}
        initialNumToRender={4}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: 'rgb(249,249,249)',
  },
  productItem: {
    backgroundColor: 'rgb(255,255,255)',
    position: 'relative',
    paddingBottom: 20,
  },
});

export default Product;
