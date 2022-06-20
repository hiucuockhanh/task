import React, { FunctionComponent, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { QueryClient, useMutation, useQuery } from "react-query";
import { getPostById } from "../../services/api";
import apiClient from "../../services/base";
import database from "@faker-js/faker/dist/types/locales/en/database";

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

const getPostId = async (id: number) => { getPostById(id) };
const usePostId = (id: number) => useQuery([ 'post', id ], () => getPostId(id));
//@ts-ignore
const UpdatePost = ({route}) => {
  const { post } = route && route.params;
  const [putTitle, setPutTitle] = useState(post.title);
  const [putBody, setPutBody] = useState(post.body);
  const queryClient = new QueryClient()
  const { isSuccess, isLoading } = usePostId(post.id);
  const { mutate: updating } = useMutation( async () => {
      return await apiClient.put(`/${post.id}`, {
        title: putTitle,
        body: putBody
      });
    }, {
      onMutate: (data) => {console.log({ data })},
      onSuccess: () => {
        // queryClient.refetchQueries()
        console.log("Update success");
      },
      onError: (err) => console.log(`Error: ${err}`),
    })

  const handleUpdate = () => {
    if (post.id) {
      try {
        updating()
      } catch(err) {
        console.log(err)
      }

      console.log(`Id: ${post.id}`)
      console.log(`Title: ${putTitle}`)
      console.log(`Body: ${putBody}`)
    }
  }
  return (
    <ScrollView>
      <View>
        {isLoading && (
          <Text>Loading...</Text>
        )}
        {isSuccess && (
          <View style={styles.container}>
              <View key={post.id} style={styles.box}>
                <TextInput
                  style={[styles.input, styles.inputTitle]}
                  multiline={true}
                  onChangeText={(text) => (setPutTitle(text))}
                  // value={putTitle}
                >

                  {post.title}
                </TextInput>
                <TextInput
                  style={[styles.input, styles.inputBody]}
                  multiline={true}
                  onChangeText={(text) => (setPutBody(text))}
                  numberOfLines={100}
                  // value={putBody}
                >
                  {post.body}
                </TextInput>
              </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleUpdate}
            >
              <Text style={styles.add}>Update Post</Text>
            </TouchableOpacity>
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
  },
  box: {
    marginTop: 80,
  },
  text: {
    color: '#000000',
    fontSize: 22,
    margin: 10,
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    width: WIDTH * 0.9,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
  },
  inputTitle: {
    height: 60,
  },
  inputBody: {
    height: 100,
  },
  button: {
    marginTop: 100,
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

export default UpdatePost
