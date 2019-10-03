import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class NestedHomeChild extends Component{
    static navigationOptions = {
        title: 'Halaman Home Child',
    };
    render(){
        return(
            <View>
                <Text>Halaman Home Child</Text>
            </View>
        )
    }
}