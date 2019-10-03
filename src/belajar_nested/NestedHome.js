import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class NestedHome extends Component{
    static navigationOptions = {
        title: 'Halaman Home Parent',
      };
    render(){
        return(
            <View>
                <Text>Halaman Home</Text>
                <Button 
                    title={"Ke Child Page"}
                    onPress={() => this.props.navigation.navigate('Home1')}
                    />
            </View>
        )
    }
}