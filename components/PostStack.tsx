import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from "./User/Posts";
import Post from "./User/GetPostById";
import Form from "./User/CreatePost";
import UpdatePost from "./User/UpdatePost";
// import ListPost from "./User/ListPost";

const MainStack = createStackNavigator();

const PostStack = () => {
  return (
      <MainStack.Navigator>
        <MainStack.Screen name={'Posts'} component={Posts} />
        <MainStack.Screen name={'Create'} component={Form} />
        <MainStack.Screen name={'Update'} component={UpdatePost} />
        <MainStack.Screen name={'Post'} component={Post} />
      </MainStack.Navigator>
  );
};

export default PostStack;
