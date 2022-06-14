import React, { FunctionComponent } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useQuery } from 'react-query';
import axios from 'axios';
import colors from "../../constants/colors";
import {getPostById} from "../../services/api";

const WIDTH = Dimensions.get('window').width;

interface Props {
  id: number;
  name: string;
  email: string;
  body: string;
}

// const Comment : FunctionComponent<Props> =
//   ({
//
//   }) => {
//
//   return (
//
//   )
// }
const getPostId = async (id: number) => {
  getPostById(id);
};

const usePostId = (id: any) => useQuery([ 'posts', id ], () => getPostId(id));

// @ts-ignore
const GetPostById = ({route}) => {
  const { post } = route && route.params;
  const { isSuccess, isLoading } = usePostId(post.id);
  return (
    <ScrollView>
      <View>
        {isLoading && (
          <Text>Loading post...</Text>
        )}
        {isSuccess && (
          <View style={styles.container}>
              <View key={post.id} style={styles.box}>
                <Text style={styles.title}>Title: {post.title}</Text>
                <Text style={styles.body}>Body: {post.body}</Text>
              </View>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 160,
  },
  box: {
    backgroundColor: '#a17070',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    minHeight: 200,
    width: WIDTH
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    paddingVertical: 10,
    textAlign: 'center',
  },
  body: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '200',
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 120,
    height: 60,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#0fa243',
  },
  add: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
    marginTop: 14,
  }
})

export default GetPostById
