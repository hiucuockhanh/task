import React, {FunctionComponent} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
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

  return (
    <SafeAreaView style={styles.primary}>
      <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
        <View style={styles.productItem}>
          <Slide />
          <ProductItem productName={'Abidas'} />
          <ButtonProduct />
        </View>
        <AboutProduct />
        <ListProduct />
      </ScrollView>
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
