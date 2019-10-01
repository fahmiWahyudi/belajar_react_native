import React, { Component } from 'react';
import { Text, Image, ScrollView , View } from 'react-native';
import { Button, ListItem, Icon } from 'react-native-elements';
import axios from 'axios';

export default class HelloWordApp extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://mhs.rey1024.com/apibudaya/getListCategory.php')
    .then(response => {
      const persons = response.data;
      this.setState({ persons });
      // console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    return (
      
      <ScrollView>
        <View><Button 
        icon={
          <Icon name="" size={25} color="red" />
        } title="Kategori Budaya"/></View>
      {
        this.state.persons.map((item, i) => (
          <ListItem
              key={i}
              leftAvatar={{ source: { uri: 'http://wadaya.rey1024.com/upload/kategori/' + item.gambar} }}
              title={item.nama}
              bottomDivider
            /> 
        ))
      }
    </ScrollView>
    );
  }
}