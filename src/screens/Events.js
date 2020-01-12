import React, { Component } from 'react';
import { View,ImageBackground,Picker,TouchableWithoutFeedback} from 'react-native';
import { Card,Text,DeckSwiper} from 'native-base';
import { connect } from 'react-redux';
import {getEvenToday,getEvenUp} from '../_actions/home'

class Events extends Component{
    constructor(props){
      super(props);
      this.state={
        homeIcon:true,
        categoryIcon:false,
        navigateIcon:false,
        events:[],
      }
    }

    componentDidMount(){
      this.props.getEvenToday()
      if (this.state.events.length<=0){
        this.state.events = this.props.getEvent.data
      } 
    }
    
    selectTime = (itemValue)=>{
      this.setState({time: itemValue})
      if(itemValue == 'upcoming'){
        this.props.getEvenToday()
        this.state.events = this.props.getEvent.data
      }else if(itemValue == 'today'){
        this.props.getEvenUp()
        this.state.events = this.props.getEvent.data
      }
    }
 
    static navigationOptions = {
      header: null
    }

    render(){

      const { data,isLoading} = this.props.getEvent;

      if((isLoading) || (this.state.events.length<=0)){
        return <Text>Loading</Text>
      }

      return(
        <>
        <View style={{height:80,backgroundColor:'white',justifyContent:'center',paddingLeft:30}}>
          <Picker
            selectedValue={this.state.time}
            style={{width: 300,color:'#d10202'}}
            onValueChange={(itemValue='today')=>this.selectTime(itemValue)}>
            <Picker.Item label="Today Events" value="today" />
            <Picker.Item style={{fontSize:30}} label="Upcoming Events" value="upcoming" />
          </Picker>
        </View>

        <View style={{width:'100%',backgroundColor:'#e3d5d5',paddingTop:15,height:'100%',paddingLeft:40}}>
          <DeckSwiper
            dataSource={this.state.events}
            renderItem={item =>
              <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('detailevent',{id:item.id})}>
              <Card style={{elevation: 20,height:450,width:'85%',borderRadius:15}} >
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
               </TouchableWithoutFeedback>
            }
          />
        </View>
        </>
      )
    }
}


const mapStateToProps = state => ({
  getEvent:state.getEvent

});

const mapDispatchToProps = dispatch => {
  return { 
    getEvenToday:()=>dispatch(getEvenToday()),
    getEvenUp:()=>dispatch(getEvenUp())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events)


