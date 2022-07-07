import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';


export default function Home({ navigation }) {
  return (
    <View>
      <Text>This is Home Screen ! </Text>
      <Button 
        title='About'
        onPress={()=>{navigation.navigate('About', {name: 'About'})}}
      />
    </View>
  );
}