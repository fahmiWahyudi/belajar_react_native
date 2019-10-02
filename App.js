import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import TabNavigator from './src/Router/Router'

// const NavPage = createAppContainer(Drawer)
// const NavPage = createAppContainer(TabNavigator)

export default class App extends Component{
  render(){
    return(

        <TabNavigator/>

    )
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5FCFF',
  }
});

