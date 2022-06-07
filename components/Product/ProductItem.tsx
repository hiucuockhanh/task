import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  productName?: string;
  intro?: string;
  model?: string;
  price?: string;
}

const ProductItem: FunctionComponent<Props> = ({
  productName= 'KOOKAI',
  intro= 'New Look Frill Hem Bouse',
  model= 'SKU: ET 5131',
  price= 'AU$100',
}) => {
  return (
    <View style={styles.textCenter}>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.intro}>{intro}</Text>
      <Text>{model}</Text>
      <Text style={styles.boldText}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: 17,
    color: 'rgb(117, 117, 117)',
    marginTop: 5,
  },
  intro: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
    color: 'rgb(38, 38, 38)',
  },
  boldText: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 25,
    marginTop: 10,
  },
})

export default ProductItem
