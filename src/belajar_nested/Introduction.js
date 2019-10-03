import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Introduction extends Component{
    static navigationOptions = {
        title: 'Halaman Introduction',
      };
    render(){
        return(
            <View>
                
                <Button 
                    title={"Ke Main Halaman"}
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
                
                <Text style={{fontSize:30}}>Halaman Introduction</Text>
            </View>
        )
    }
}