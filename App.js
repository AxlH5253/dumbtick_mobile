import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import{ createAppContainer } from 'react-navigation';
import { Container, Icon, Text } from 'native-base';
import HomeScreen from './src/screens/Home';
import Category from './src/screens/Category';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render(){
  return (
     <Container>
       <Header/>
       <AllPage/>
     </Container>
  );
  }
}
//const StackNavigator = createStackNavigator({
//   home:HomeScreen,
//   cartegories:Category,
// })

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Icon name='ios-home' size={25} color='gray' />
        )
      })
    },
    Categories: {
      screen: Category,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Icon name='apps' size={25} color= 'gray' />
        )
      })
    },
    Search: {
      screen: Category,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Icon name='ios-search' size={25} color='gray' />
        )
      })
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
    activeTintColor: '#591887',
    inactiveTintColor: 'gray',
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


const AllPage = createAppContainer(TabNavigator)


export default App;

const styles = StyleSheet.create({
  Header: {
    fontSize: 30,
    width:'100%',
    height: 50,
    backgroundColor:'#041426',
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
