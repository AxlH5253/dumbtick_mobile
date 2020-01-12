import React, { Component } from 'react';
import { View,ImageBackground,Picker,TouchableWithoutFeedback} from 'react-native';
import { Card,Text,DeckSwiper} from 'native-base';
import { connect } from 'react-redux';
import {getEvenToday,getEvenUp} from '../_actions/home'

class Category extends Component{
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
          
        </View>

        <View style={{width:'100%',backgroundColor:'#e3d5d5',height:'100%'}}>
         
         <View style={{flexDirection:'row'}}>
          <TouchableWithoutFeedback>
              <Card style={{height:150,width:175}} >
                  
              </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Card style={{height:150,width:175}} >
                  
              </Card>
            </TouchableWithoutFeedback>
          </View>

          <View style={{flexDirection:'row'}}>
          <TouchableWithoutFeedback>
              <Card style={{height:150,width:175}} >
                  
              </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Card style={{height:150,width:175}} >
                  
              </Card>
            </TouchableWithoutFeedback>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableWithoutFeedback>
              <Card style={{height:150,width:175}} >
                  
              </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Card style={{height:150,width:175}} >
                  
              </Card>
            </TouchableWithoutFeedback>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Category)


