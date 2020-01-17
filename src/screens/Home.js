import React, { Component } from 'react';
import DetailEvent from './DetailEvent';
import Events from './Events';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text} from 'react-native';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HomePage/>
        )
    }
}

const HomeNavigator = createStackNavigator({
    events: {screen: Events},
    detailevent: {screen: DetailEvent},
});

const HomePage = createAppContainer(HomeNavigator)

export default Home