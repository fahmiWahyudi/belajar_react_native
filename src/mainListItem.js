/*
    * Class main untuk file listitem.js 
*/

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem, {Separator} from './src/ListItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={goods}
                    keyExtractor={item=> item.id}
                    renderItem={({item}) => (
                        <ListItem
                            {...item}
                            onSwipeFromLeft={() => alert('swipe from left')}
                            onRightPress={() => alert('pressed right')}
                        />
                    )}
                    ItemSeparatorComponent={() => <Separator/>}
                />
            </SafeAreaView>
        )
    };
};

const goods = [
    { id: '0', text: 'Soap' },
    { id: '1', text: 'Shampo' },
    { id: '2', text: 'Makan' },
    { id: '3', text: 'Minum' },
    { id: '4', text: 'Soda' }
];