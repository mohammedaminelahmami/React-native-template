import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';


export default function About({ navigation }) {
  return (
    <View>
      <Text>This is About Screen !</Text>
      <Button 
        title='Home'
        onPress={()=>{navigation.goBack()}}
      />
    </View>
  );
}