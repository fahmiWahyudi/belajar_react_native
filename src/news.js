// Berita
import React, { Component } from 'react';
import { Text, Image, ScrollView , StyleSheet } from 'react-native';

export default class HelloWordApp extends Component {
  render(){
    return (
      <ScrollView >
        <Text style={{backgroundColor:'red', fontSize:15}}>Home / Berita</Text>
        <Text style={{fontSize:12}}>Senin 30 September 2019, 21:19 WIB</Text>
        <Text style={style.judulText}>Massa Bubar, Jalan Palmerah Timur Belakang DPR Kembali Dibuka</Text>
        <Image 
          style={{width: 400, height: 200, alignSelf:"center"}}
          source={{uri:'https://akcdn.detik.net.id/community/media/visual/2019/09/30/186fde45-b891-4e57-9d5f-732b8b1dd1a4_169.jpeg?w=650&q=90'}}
          />
        <Text style={{fontWeight:'bold', fontSize:20}}>
          Jakarta 
          <Text style={{fontFamily:'verdana', justifyContent:"center", fontSize:15, fontWeight:'normal'}}>- Massa di Jalan Palmerah Timur, belakang gedung DPR membubarkan diri. Lalu lintas kembali dibuka. {'\n'}</Text>
        </Text>
        <Text style={{fontFamily:'verdana', justifyContent:"center", fontSize:15, fontWeight:'normal'}}>Pantauan detikcom, lalu lintas di Jalan Palmerah Timur menuju Jalan Gelora dibuka sekitar pukul 21.00 WIB, Senin (30/9/2019). Lalu lintas di Jalan Tentara Pelajar ke arah Pasar Palmerah juga sudah kembali normal.{'\n'}{'\n'}</Text>

        <Image 
          style={{width: 300, height: 150, alignSelf:"center"}}
          source={{uri:'https://akcdn.detik.net.id/community/media/visual/2019/09/30/a819ea0e-e876-430e-bc4a-0399b4fa9109_169.jpeg?w=620'}}
          />
        <Text>{'\n'}Tak ada massa yang berkumpul di ruas jalan tersebut. Beberapa personel polisi masih berada di lokasi. Sementara kendaraan taktis sudah digeser. {'\n'}</Text>
        <Text>Kericuhan sebelumnya terjadi di Jalan Tentara Pelajar, Jalan Palmerah Timur dan arah Pasar Palmerah. Massa melempar polisi dengan batu. Lemparan itu kemudian dibalas polisi dengan tembakan gas air mata.</Text>
      </ScrollView >
    );
  }
}

const style = StyleSheet.create({
  baseText:{
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"
  },
  judulText:{
    fontFamily:'Cochin',
    fontSize:30,
    color: 'blue',
    fontWeight:'bold'
  }
})