import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class NestedKategoriChild extends Component{
    static navigationOptions = {
        title: 'Halaman Kategori Child',
    };
    render(){
        return(
            <View>
                <Text>Halaman Kategori Child</Text>
            </View>
        )
    }
}