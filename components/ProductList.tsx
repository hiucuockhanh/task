import React, { FunctionComponent, useState } from "react";
// import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//
// const WIDTH = Dimensions.get('window').width;
//
// interface Props {
//   id: number;
//   name: string;
//   image: string;
//   brand: string;
//   price: number;
//   isWishlist: boolean,
//   isTrending: boolean,
//   status: boolean,
//   star: number;
// }
//
// const ProductList =  () => {
//   const products = [];
//   for (let i = 0; i < 1000; i++) {
//     products.push(
//       {
//         id: i,
//         name: 'Women Nupse Jacket',
//         image: 'https://cdn.pixabay.com/photo/2022/05/30/16/09/tatra-mountains-7231545__480.jpg',
//         brand: 'Northface',
//         price: i * 2,
//         isWishlist: false,
//         isTrending: false,
//         status: false,
//         star: 0
//       }
//     )
//   }
//
//   const [product, setProduct] = useState([products]);
//
//   const renderItem = ({item}) => {
//     return (
//       <View style={styles.products}>
//         <Image
//           style={styles.img}
//           source={{ uri: item.image }}
//         />
//         <Text style={styles.brand}>{item.brand}</Text>
//         <Text style={styles.txt}>{item.name}</Text>
//         {/*<Text style={styles.brand}>{item.star}</Text>*/}
//         {/*{stars}*/}
//         <View style={styles.button}>
//           <Text style={styles.price}>${item.price}</Text>
//           <TouchableOpacity style={styles.touch}>
//             <Image
//               style={styles.imgBag}
//               source={require("../assets/icon/bag.jpeg")}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     )
//   }
//
//   return (
//     <View>
//       <ScrollView horizontal={true} style={{ width: "100%" }}>
//         <FlatList
//           scrollEnabled={false}
//           maxToRenderPerBatch={10}
//           initialNumToRender={10}
//           numColumns={2}
//           data={products}
//           keyExtractor={(item, index) => index.toString()}
//           columnWrapperStyle={{ justifyContent: "space-between" }}
//           renderItem={renderItem}
//         />
//       </ScrollView>
//     </View>
//   );
// };
//
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     products: {
//       // flex: 1,
//       position: 'relative',
//       backgroundColor: 'rgb(255, 255, 255)',
//       borderWidth: 2,
//       height: 360,
//       width: WIDTH * 0.5,
//       borderStyle: 'solid',
//       borderColor: 'rgb(249, 249, 249)',
//       resizeMode: 'stretch',
//     },
//     img: {
//       top: 10,
//       right: 10,
//       left: 20,
//       resizeMode: 'stretch',
//       height: 190,
//       width: 150,
//     },
//     brand: {
//       marginTop: 15,
//       left: 20,
//       fontWeight: '200',
//     },
//     txt: {
//       fontSize: 16,
//       marginTop: 5,
//       fontWeight: '300',
//       width: 150,
//       left: 20,
//     },
//     button: {
//       position: 'absolute',
//       bottom: 15,
//       left: 0,
//       right: 0,
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-around',
//       marginTop: 10,
//     },
//     price: {
//       fontWeight: '500',
//       fontSize: 18,
//     },
//     touch: {
//       width: 60,
//       height: 35,
//       color: 'white',
//       borderRadius: 30,
//       backgroundColor: 'rgb(67, 164, 34)',
//     },
//     imgBag: {
//       top: 8,
//       left: 23,
//       resizeMode: 'stretch',
//       height: 15,
//       width: 15,
//     },
//     star: {
//       resizeMode: 'stretch',
//       height: 18,
//       width: 18,
//       right: 40,
//     },
//   });
// export default React.memo(ProductList)
