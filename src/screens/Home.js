import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,View,ImageBackground,Picker} from 'react-native';
import { List,ListItem, Card, CardItem, Thumbnail,cards,Button, Text, Icon, Left, Body,DeckSwiper} from 'native-base';
import{ createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import axios from 'axios';

class Home extends Component{
  render(){
    return(
    <Today/>
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
        events:[{'img':'https://i.ibb.co/gSr2dsk/1st.png'}],
        today:[],
        upcoming:[]
      }
    }

    componentDidMount() {
      axios.get(`http://192.168.1.15:5000/api/v1/events?start_time=2020-01-04`)
        .then(res => {
          this.setState({ events:res.data,today:res.data });
        })
        axios.get(`http://192.168.1.15:5000/api/v1/events?start_time_gte=2020-01-04`)
        .then(res => {
          this.setState({ upcoming:res.data });
        })
    }

    selectTime = (itemValue)=>{
      this.setState({language: itemValue})
      if(itemValue == 'today'){   
        this.setState({ events: this.state.today })
      }else if(itemValue == 'upcoming'){
        this.setState({ events: this.state.upcoming })
      }
    }
 
    static navigationOptions = {
      header: null
    }


    render(){
      return(
        <>
        <View style={{height:80,backgroundColor:'white',justifyContent:'center',paddingLeft:30}}>
          <Picker
            selectedValue={this.state.language}
            style={{width: 300,color:'#d10202'}}
            onValueChange={(itemValue)=>this.selectTime(itemValue)}>
            <Picker.Item label="Today Events" value="today" />
            <Picker.Item style={{fontSize:30}} label="Upcoming Events" value="upcoming" />
          </Picker>
        </View>
        <View style={{width:'100%',backgroundColor:'#e3d5d5',paddingTop:15,height:'100%',paddingLeft:40}}>
          <DeckSwiper
            dataSource={this.state.events}
            renderItem={item =>
              <Card style={{elevation: 20,height:450,width:'85%',borderRadius:15}}>
                <View style={{width:'100%',height:'100%',borderRadius:15,backgroundColor:'#33132c'}}>
                <ImageBackground
                  source={{uri: item.img}}
                  style={{height:'100%',width:'100%',opacity:0.6}}
                  imageStyle={{ borderRadius: 15}}>
                  
                    <View style={{height:90,borderRadius:15,backgroundColor:'#33132c',justifyContent:'center',
                                  width:'100%',alignItems:'center',marginTop:360}}>
                      <Text style={{color:'white'}}>{item.title}</Text>
                      <Text style={{color:'white'}}>{item.startAt}</Text>
                    </View>
               
                </ImageBackground>
                </View>
               </Card>
            }
          />
        </View>
        </>
      )
    }
}

// const TabNavigator = createMaterialTopTabNavigator(
//   {
//     Today: {
//       screen: Today,
//       navigationOptions: () => ({
//         tabBarIcon: () => (
//           <Icon name='ios-home' size={25} color='gray' />
//         )
//       })
//     },
//     Upcoming: {
//       screen: UpComing,
//       navigationOptions: () => ({
//         headerStyle: {
//           backgroundColor: 'red',
//         },
//         tabBarIcon: () => (
//           <Icon name='ios-home' size={25} color='gray' />
//         )
//       })
//     }
//   },{
//   tabBarOptions: {
//     activeTintColor:'white',
//     inactiveTintColor:'#D3D3D3',
//     style:{
//         backgroundColor:'#051736',
//     },
//     indicatorStyle: {
//         backgroundColor: 'white'
//     }
//    }
//   }
// )
// const Navigator = createAppContainer(TabNavigator)

// const styles = StyleSheet.create({
//   Title: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 25,
//     width:'100%',
//     textAlign:'center'
//   },
//   Imgminicard: {
//     width: '50%',
//     height: 150
//   },
//   Minicard:{
//     marginTop:30,
//     padding:10,
//     paddingLeft:1
//   }
// });

export default Home