import React, { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useQuery } from 'react-query';
import axios from 'axios';

interface Props {
  id: number;
  name: string;
  email: string;
  body: string;
}

// const Comments : FunctionComponent<Props> =
//   ({
//
//   }) => {
//
//   return (
//
//   )
// }

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments');
  console.log("get comment");
  return data;
};

const usePosts = () => useQuery('comments', fetchPosts);

const Comment = () => {

  const {data, isLoading, isSuccess} = usePosts();
  return (
    <View>
      {isLoading && (
        <Text>Loading...</Text>
      )}
      {isSuccess && (
        <View style={styles.container}>
          <FlatList
            data={data}
            style={styles.wrapper}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Text>Name: {item.name}</Text>
                  <Text>Email: {item.email}</Text>
                  <Text>Description: {item.body}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    paddingBottom: 700,
    marginTop: 30,
    marginHorizontal: 10,
  },
  box: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  }
})

export default Comment
