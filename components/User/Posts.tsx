import React from "react";
import colors from "../../constants/colors";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import {getPosts, deletePost, updatePost} from "../../services/api";

  const usePosts = () => useQuery('posts', getPosts, {
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
// @ts-ignore


const Posts = ({navigation}) => {

  const { data, isSuccess } = usePosts();

  const {mutate, isLoading} = useMutation(deletePost, {
    onSuccess: () => console.log('Delete success'),
    onError: (error) => console.log(error)
  })

  const handleDelete = (id: number) => {
    mutate(id)
  }

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
      {/*{isLoading && (*/}
      {/*  <>*/}
      {/*    <Text>Loading list post...</Text>*/}
      {/*  </>)}*/}

      {isSuccess && (
        <React.Fragment>
          <FlatList
            data={data}
            style={styles.wrapper}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
              <TouchableOpacity
                disabled={isLoading}
                onPress={() =>
                  navigation.push('Post', {post: item})
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
                  onPress={() => navigation.push('Update', {post: item})}
                >
                  <Image
                    style={styles.img}
                    source={require("../../assets/icon/edit.webp")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonBottom}
                  onPress={() => handleDelete(item.id)}
                >
                  <Image
                    style={styles.imgDelete}
                    source={require("../../assets/icon/delete.png")}
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
  },
  imageAdd: {
    resizeMode: 'stretch',
    height: 40,
    width: 40,
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
    height: 28,
    width: 28,
  },
  imgDelete: {
    resizeMode: 'stretch',
    height: 35,
    width: 35,
  },
  buttonTop: {
    position: 'absolute',
    top: 5,
    right: 15,
  },
  buttonBottom: {
    position: 'absolute',
    bottom: 5,
    right: 15,
  }
});

export default Posts
