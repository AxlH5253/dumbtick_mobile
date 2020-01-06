import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,FlatList} from 'react-native';
import { List,ListItem, Card, CardItem, Thumbnail, Text, Icon, Left, Body} from 'native-base';
import{ createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import axios from 'axios';

class HomeScreen extends Component{
  render(){
    return(
    <Navigator/>
    )
  }
}

class Today extends Component{
    constructor(){
      super();
      this.state={
        homeIcon:true,
        categoryIcon:false,
        navigateIcon:false,
        events:[]
      }
    }

    componentDidMount() {
      axios.get(`http://192.168.1.36:5000/api/v1/events?start_time=2020-01-04`)
        .then(res => {
          this.setState({ events:res.data });
        })
    }
 
    static navigationOptions = {
      header: null
    }


    render(){
      const {navigate} = this.props.navigation;

      return(
        <>
        <ScrollView>
        {this.state.events.slice(0,1).map((item,index)=>
        <Card key={index}>
        <CardItem>
          <Left>
        < Text style={styles.Title}>{item.title}</Text>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri:item.img}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
        <Left>
            <Icon  name="time" />
            <Text>{item.startAt.substring(0,10)} at {item.startAt.substring(11,16)}</Text>
        </Left>
        </CardItem>
        <CardItem>
        <Left>
            <Icon  name="ios-pin" />
            <Text>{item.address}</Text>
        </Left>
        </CardItem>
        <CardItem>
          
        <Text>
        {item.description.slice(0,100)}...    
        </Text>
        </CardItem>
      </Card>
      )}

      {this.state.events.slice(1,10).map((item,index)=>
      <Card style={styles.Minicard}>
          <List>
            <ListItem thumbnail>
                <Thumbnail style={styles.Imgminicard} square source={{ uri:item.img }} />

              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>{item.description}</Text>
              </Body>
            </ListItem>
          </List>
        </Card>
    )}
    </ScrollView>
    </>
      )
    }
}

class UpComing extends Component{
  constructor(){
    super();
    this.state={
      homeIcon:true,
      categoryIcon:false,
      navigateIcon:false,
      events:[]
    }
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    axios.get(`http://192.168.1.36:5000/api/v1/events?start_time_gte=2020-01-04`)
      .then(res => {
        this.setState({ events:res.data });
      })
  }


  render(){
    const {navigate} = this.props.navigation;
    return(
      <>
        <ScrollView>
        {this.state.events.slice(0,1).map((item,index)=>
        <Card key={index}>
        <CardItem>
          <Left>
        < Text style={styles.Title}>{item.title}</Text>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri:item.img}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
        <Left>
            <Icon  name="time" />
            <Text>{item.startAt.substring(0,10)} at {item.startAt.substring(11,16)}</Text>
        </Left>
        </CardItem>
        <CardItem>
        <Left>
            <Icon  name="ios-pin" />
            <Text>{item.address}</Text>
        </Left>
        </CardItem>
        <CardItem>
          
        <Text>
        {item.description.slice(0,100)}...    
        </Text>
        </CardItem>
      </Card>
      )}

      {this.state.events.slice(1,10).map((item,index)=>
      <Card style={styles.Minicard}>
          <List>
            <ListItem thumbnail>
                <Thumbnail style={styles.Imgminicard} square source={{ uri:item.img }} />

              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>{item.description}</Text>
              </Body>
            </ListItem>
          </List>
        </Card>
    )}
    </ScrollView>
    </>
    )
  }
}

export default HomeScreen

const TabNavigator = createMaterialTopTabNavigator(
  {
    Today: {
      screen: Today,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Icon name='ios-home' size={25} color='gray' />
        )
      })
    },
    Upcoming: {
      screen: UpComing,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: 'red',
        },
        tabBarIcon: () => (
          <Icon name='ios-home' size={25} color='gray' />
        )
      })
    }
  }
) 

const Navigator = createAppContainer(TabNavigator)

//const StackNavigator = createStackNavigator({
//   home:HomeScreen,
//   cartegories:Category,
// })

const styles = StyleSheet.create({
  Title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    width:'100%',
    textAlign:'center'
  },
  Imgminicard: {
    width: '50%',
    height: 150
  },
  Minicard:{
    marginTop:30,
    padding:10,
    paddingLeft:1
  }
});