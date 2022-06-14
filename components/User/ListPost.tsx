import React, { useEffect, useState } from "react";
import colors from "../../constants/colors";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { useQuery } from "react-query";

const [APIData, setAPIData] = useState([]);

// const fetchPosts = async () => {
//   const {data} = await  axios.get('https://62a6df6097b6156bff813771.mockapi.io/fakeData');
//   return data;
// }

// const getData = () => {
//   axios.get(`https://62a6df6097b6156bff813771.mockapi.io/fakeData`)
//     .then((getData) =>{
//       set
//     })
// }

const deletePost = (id: number) => {
  axios.delete(`https://62a6df6097b6156bff813771.mockapi.io/fakeData/${id}`)
    .then(() => {
      fetchPosts().then(r => fetchPosts());
    })
}

const usePosts = () => useQuery('posts', fetchPosts);

useEffect(() => {
  axios.get(`https://62a6df6097b6156bff813771.mockapi.io/fakeData`)
    .then((response) => {
      setAPIData(response.data)
    })
}, [])

// @ts-ignore
const Posts = ({navigation}) => {

  const { data, isLoading, isSuccess } = usePosts();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.push('Create')}
      >
        <Image
          style={styles.imageAdd}
          source={require('../../assets/icon/add.jpeg')}
        />
      </TouchableOpacity>
      {isLoading && (
        <>
          <Text>Loading...</Text>
        </>)}

      {isSuccess && (
        <React.Fragment>
          <FlatList
            data={data}
            style={styles.wrapper}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('Comment', {post: item})
                }
                style={styles.post}
              >
                <View style={styles.item}>
                  <Text style={styles.postTitle}>
                    {item.title}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonTop}
                  onPress={() => navigation.push('Update')}
                >
                  <Image
                    style={styles.img}
                    source={require('../../assets/icon/edit.webp')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonBottom}
                  onPress={() => deletePost(item.id)}
                >
                  <Image
                    style={styles.img}
                    source={require('../../assets/icon/delete.png')}
                  />
                </TouchableOpacity>

              </TouchableOpacity>
            )}
          />
        </React.Fragment>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
    // position: 'relative',
  },
  imageAdd: {
    resizeMode: 'stretch',
    height: 40,
    width: 40,
    // position: 'absolute',
    top: 10,
    left: 10,
  },
  wrapper: {
    paddingBottom: 700,
    marginTop: 30,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  post: {
    position: 'relative',
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 340,
    left: 15,
    minHeight: 80,
  },
  postTitle: {
    color: colors.white,
    fontSize: 18,
    width: 260,
  },
  img: {
    resizeMode: 'stretch',
    height: 30,
    width: 30,
  },
});

export default Posts
