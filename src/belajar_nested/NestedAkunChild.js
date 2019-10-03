import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class NestedHomeAkun extends Component{
    static navigationOptions = {
        title: 'Halaman Akun Child',
    };
    render(){
        return(
            <View>
                <Text>Halaman Home Akun</Text>
            </View>
        )
    }
}