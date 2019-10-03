import React, { Component } from 'react'
import { View, Text , Button } from 'react-native'

export default class NestedAkun extends Component{
    static navigationOptions = {
        title: 'Halaman Akun Parent',
      };
    render(){
        return(
            <View>
                <Text>Halaman Akun</Text>
                <Button 
                    title={"Ke Child Page"}
                    onPress={() => this.props.navigation.navigate('Akun1')}
                    />
            </View>
        )
    }
}