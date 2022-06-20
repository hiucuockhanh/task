import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {createPost} from "../../services/api";
import { useMutation } from "react-query";

interface Prop {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const useCreatePost = () => useMutation('addPost', createPost);

const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const {isSuccess, isLoading} = useCreatePost();
  const postData = () => {
    createPost({ title, body });
    console.log(`${title}: ${body}`)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your post:
      </Text>
      <TextInput
        style={[styles.input, styles.inputTitle]}
        multiline={true}
        onChangeText={(text) => (setTitle(text))}
        placeholder='Enter your title'
        value={title}
      />
      <TextInput
        style={[styles.input, styles.inputBody]}
        multiline={true}
        numberOfLines={100}
        onChangeText={(text) => (setBody(text))}
        placeholder='Enter your body'
        value={body}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={postData}
      >
        <Text style={styles.add}>Add Post</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
  },
  text: {
    color: '#000000',
    fontSize: 22,
    margin: 10,
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    width: 300,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
  },
  inputTitle: {
    height: 60,
    paddingTop: 20,
  },
  inputBody: {
    height: 80,
    paddingTop: 30,
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

export default Form;
