import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class NestedKategori extends Component{
    static navigationOptions = {
        title: 'Halaman Kategori Parent',
      };
    render(){
        return(
            <View>
                <Text>Halaman Kategori</Text>
                <Button 
                    title={"Ke Child Page"}
                    onPress={() => this.props.navigation.navigate('Kategori1')}
                    />
            </View>
        )
    }
}