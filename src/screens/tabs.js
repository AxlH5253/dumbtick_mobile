import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import{ createAppContainer } from 'react-navigation';
import { Icon, Text} from 'native-base';
import Home from './Home'
import Category from './Category'
import { createBottomTabNavigator } from 'react-navigation-tabs';


class Tabs extends Component {
  
  static navigationOptions = { 
        header: null
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
      screen: Category,
      navigationOptions: ({tintColor}) => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name='apps' size={25} style={{color:tintColor}} />
        )
      })
    },
    Search: {
      screen: Category,
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
        tabBarSelectedIconColor: '#fff',
      },
      activeTintColor: '#d10202',
      inactiveTintColor: 'gray'
    },
  }
);

class Header extends Component{

  render(){
    return(
      <View style={styles.Header}>
        <Text style={styles.Title}>Dumb-Tick</Text>
      </View>
    )
  }
}


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

export default Tabs;