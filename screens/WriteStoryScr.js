import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScr extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.story} placeholder={'What is the name of your story?'}/>
    <TextInput style={styles.story} placeholder={'who is the author of this story?'}/>
    <TextInput style={styles.inputBox2}  placeholder={'Write your story here'} multiline={true}/>
    <TouchableOpacity style={styles.submit}>
        <Text>Submit</Text>
    </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    story:{
        marginTop: 50,
    width: 380,
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    backgroundColor: '#FFFD9B'
    },
    inputBox2:{
        marginTop: 50,
      width: 380,
      alignSelf: 'center',
      height: 200,
      textAlign: 'center',
      borderWidth: 4,
      backgroundColor: '#FFFD9B'
    },
    submit:{
        justifyContent:'center',
        borderWidth:4,
        backgroundColor:'pink',
        marginTop:20,
        marginLeft:650,
        width:100,
        height:45, 
    }
})