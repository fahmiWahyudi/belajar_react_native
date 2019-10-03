import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'

import { AppNavigation } from './src/belajar_nested/config/Route'

const NavPage = createAppContainer(AppNavigation)

export default class App extends Component{
  render(){
    return(

      <View style={styles.container}>
        <NavPage />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5FCFF',
  }
});

