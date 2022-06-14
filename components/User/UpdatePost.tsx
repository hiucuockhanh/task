import React, { FunctionComponent, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPostById, updatePost } from "../../services/api";


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





const queryClient = useQueryClient();
const getPostId = async (id: number) => {
  getPostById(id);
};
const usePostId = (id: number) => useQuery([ 'post', id ], () => getPostId(id));
// const useUpdatePost = async (id: number, newData: any) => useMutation('posts', updatePost, {
//   onSuccess: () => {
//     queryClient.invalidateQueries('post')
//     console.log("Update success");
//   },
// });
// const {mutate, isLoading} = useMutation(['updateKey', usePostId], () => updatePost())



// @ts-ignore
const UpdatePost = ({route}) => {
  const { post } = route && route.params;
  const { isSuccess, isLoading } = usePostId(post.id);
  const [title, setTitle] = useState(post.title);

  const [body, setBody] = useState(post.body);

  const mutation = useMutation( 'post', updatePost, {
    onMutate: async newPost => {
      await queryClient.cancelQueries(['post', newPost.id]);
      const previousPost = queryClient.getQueryData(['post', newPost.id]);
      queryClient.setQueryData(['post', newPost.id], newPost);
      return {previousPost, newPost}
    },
    onSuccess: (data) => {
      queryClient.setQueryData('post', data)
      console.log({data})
      console.log("Update success");
    },
    onSettled: newPost => {
      queryClient.invalidateQueries(['post', newPost.id])
    }
  })

  // const {mutate} = useUpdatePost(title, body)

  const handleUpdate = (id: number, newData: any) => {
    mutation.mutate({ id: post.id, title: post.title, body: post.body })
    console.log(`${title}: ${body}`)
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
                  onChangeText={(text) => (setTitle(text))}
                  // value={title}
                >

                  {post.title}
                </TextInput>
                <TextInput
                  style={[styles.input, styles.inputBody]}
                  multiline={true}
                  onChangeText={(text) => (setBody(text))}
                  // onChangeText={e => setTitle(e.target.value())}
                  numberOfLines={100}
                  // value={body}
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
    // paddingTop: 20,
  },
  inputBody: {
    height: 100,
    // paddingTop: 30,
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
