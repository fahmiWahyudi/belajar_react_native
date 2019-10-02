import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class Home extends Component{
    
    render(){
        return(
            <View>
                <Text>ini Home</Text>
                <Button 
                    title="List"
                    onPress={() => this.props.navigation.navigate('List')} />

                <Button 
                    title="View Portofolio"
                    onPress={() => this.props.navigation.navigate('Portofolio')} />
            </View>
        );
    }
}