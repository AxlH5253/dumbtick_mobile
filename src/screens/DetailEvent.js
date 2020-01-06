import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,FlatList} from 'react-native';
import { List,ListItem, Card, CardItem, Thumbnail, Text, Icon, Left, Body} from 'native-base';
import{ createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import axios from 'axios';

class DetailEvent extends Component{
    render(){
        return(
            <Text>Detail Event</Text>
        )
    }
}

export default DetailEvent