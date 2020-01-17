import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import{ createAppContainer } from 'react-navigation';
import { Icon, Text} from 'native-base';
import Home from './Home';
import CategoryNavigation from './CategoryNavigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {getEvenToday,getEvenUp} from '../_actions/home'
import { connect } from 'react-redux';


class Tabs extends Component {
  
  static navigationOptions = { 
        header: null
  }

  componentDidMount(){
    this.props.getEvenToday()
  }

  render(){
  return (
      <>
       <AllPages/>
      </>
  );
  }
}


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name='ios-home' size={25} style={{color:tintColor}} />
        )
      })
    },
    Categories: {
      screen: CategoryNavigation,
      navigationOptions: ({tintColor}) => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name='apps' size={25} style={{color:tintColor}} />
        )
      })
    },
    Search: {
      screen: CategoryNavigation,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name='ios-search' size={25} style={{color:tintColor}} />
        )
      })
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
      },
      activeTintColor: '#d10202',
      inactiveTintColor: 'gray'
    },
  }
);

const AllPages = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  Header: {
    fontSize: 30,
    width:'100%',
    height: 50,
    backgroundColor:'#051736',
    color:'white',
    display:'flex'
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 30,
    width:'100%',
    textAlign:'center',
    color:'white'
  },
});


const mapStateToProps = state => ({
  // getEvent:state.getEvent

});

const mapDispatchToProps = dispatch => {
  return { 
    getEvenToday:()=>dispatch(getEvenToday()),
    getEvenUp:()=>dispatch(getEvenUp())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)