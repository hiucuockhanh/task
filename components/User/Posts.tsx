import React from "react";
import colors from "../../constants/colors";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { QueryClient, useInfiniteQuery, useMutation, useQuery } from "react-query";
import {getPosts, deletePost} from "../../services/api";

interface Prop {
  id: number,
  title: string,
  body: string,
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: Infinity,
    }
  }
})


// @ts-ignore
const Posts = ({navigation}) => {
  
  const {data, isSuccess, isLoading: loadingPosts, hasNextPage, fetchNextPage, isFetchingNextPage} =
    useInfiniteQuery('posts', getPosts, {
      getNextPageParam: lastPage => {
        if (lastPage.next !== null) {
          return lastPage.next;
        }
        return lastPage;
      }
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }

  const {mutate, isLoading} = useMutation(['delete'], deletePost, {
    onSuccess: () => {
      console.log("Delete success");
      // queryClient.refetchQueries(['delete'], {active: false});
    },
    onError: (error) => console.log(error)
  })

  const handleDelete = (id: number) => {
    mutate(id)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addBtn}
        onPress={() => navigation.push('Create')}
      >
        <Image
          style={styles.imageAdd}
          source={require('../../assets/icon/add.jpeg')}
        />
      </TouchableOpacity>
      {loadingPosts && (
        <>
          <Text>Loading list post...</Text>
        </>)}

      {isSuccess && (
        <React.Fragment>
          <FlatList
            data={data?.pages.flat()}
            style={styles.wrapper}
            keyExtractor={(item, index) => `${index.toString()}`}
            onEndReached={loadMore}
            onEndReachedThreshold={0.3}
            ListFooterComponent={isFetchingNextPage ? 'load more' : null}
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
    // padding: 10,
  },
  addBtn: {
    width: 50,
    height: 60,
    // position: 'absolute',
  },
  imageAdd: {
    resizeMode: 'stretch',
    height: 45,
    width: 45,
    top: 12,
    left: 20,
  },
  wrapper: {
    paddingTop: 20,
    paddingLeft: 9,
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
    height: 29,
    width: 29,
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
    right: 12,
  }
});

export default Posts
