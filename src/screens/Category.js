import React, { Component } from 'react';
import { View,ImageBackground,Picker,TouchableWithoutFeedback} from 'react-native';
import { Card,Text,DeckSwiper} from 'native-base';
import { connect } from 'react-redux';
import {getCategories} from '../_actions/home'

class Category extends Component{
    constructor(props){
      super(props);
      this.state={
        homeIcon:true,
        categoryIcon:false,
        navigateIcon:false,
        categories:[],
      }
    }

    componentDidMount(){
      this.props.getCategories();
      if (this.state.categories.length<=0){
        this.state.categories = this.props.getCategoriesState
      } 
    }
  
 
    static navigationOptions = {
      header: null
    }

    render(){

      const { data,isLoading} = this.props.getCategoriesState;

      if((isLoading) || (this.state.categories.length<=0)){
        return <Text>Loading</Text>
      }

      return(
        <>

        <View style={{height:80,backgroundColor:'white',justifyContent:'center',paddingLeft:30}}>
          <Text style={{width:'100%',textAlign:'center',fontSize:25,color:'#d10202'}}>Categories</Text>
        </View>

        <View style={{width:'100%',backgroundColor:'#e3d5d5',height:'100%'}}>
         
         <View style={{flexDirection:'row'}}>
           <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('eventby',{id:data[0].id})}>
              <Card style={{height:150,width:175,backgroundColor:'black'}}>
                <View style={{width:'100%',height:'100%',backgroundColor:'yellow'}}>
                <ImageBackground
                 source={{uri:'https://wallpapercave.com/wp/OUhtqsO.jpg'}}
                 style={{height:'100%',width:'100%'}}
                >
                <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'black',opacity:0.6}}>
                  <Text style={{color:'white',fontSize:30}}>{data[0].name}</Text>
                </View>
                </ImageBackground>
                </View>
              </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('eventby',{id:data[1].id})}>
              <Card style={{height:150,width:175,backgroundColor:'black'}}>
                <View style={{width:'100%',height:'100%',backgroundColor:'yellow'}}>
                <ImageBackground
                 source={{uri:'http://getwallpapers.com/wallpaper/full/e/c/1/1054996-large-nike-football-wallpaper-2018-1920x1110-tablet.jpg'}}
                 style={{height:'100%',width:'100%'}}
                >
                <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'black',opacity:0.6}}>
                  <Text style={{color:'white',fontSize:30}}>{data[1].name}</Text>
                </View>
                </ImageBackground>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          </View>

          <View style={{flexDirection:'row'}}>
          <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('eventby',{id:data[2].id})}>
              <Card style={{height:150,width:175,backgroundColor:'black'}}>
                <View style={{width:'100%',height:'100%',backgroundColor:'yellow'}}>
                <ImageBackground
                 source={{uri:'http://1.bp.blogspot.com/-_VZNknxnXvw/VVI1S1S6w5I/AAAAAAAABj0/xlTkZZjIXVQ/s1600/technology-wallpapers-hd-20141.jpg'}}
                 style={{height:'100%',width:'100%'}}
                >
                <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'black',opacity:0.6}}>
                  <Text style={{color:'white',fontSize:30}}>{data[2].name}</Text>
                </View>
                </ImageBackground>
                </View>
              </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('eventby',{id:data[3].id})}>
            <Card style={{height:150,width:175,backgroundColor:'black'}}>
                <View style={{width:'100%',height:'100%',backgroundColor:'yellow'}}>
                <ImageBackground
                 source={{uri:'http://eatupnewyork.com/wp-content/uploads/2015/03/104240834.jpg'}}
                 style={{height:'100%',width:'100%'}}
                >
                <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'black',opacity:0.6}}>
                  <Text style={{color:'white',fontSize:30,textAlign:'center'}}>{data[3].name}</Text>
                </View>
                </ImageBackground>
                </View>
              </Card>
            </TouchableWithoutFeedback>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('eventby',{id:data[4].id})}>
              <Card style={{height:150,width:175,backgroundColor:'black'}}>
                <View style={{width:'100%',height:'100%',backgroundColor:'yellow'}}>
                <ImageBackground
                 source={{uri:'http://regex.info/i/JF4_011320_1920x1200.jpg'}}
                 style={{height:'100%',width:'100%'}}
                >
                <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'black',opacity:0.6}}>
                  <Text style={{color:'white',fontSize:30,textAlign:'center'}}>{data[4].name}</Text>
                </View>
                </ImageBackground>
                </View>
              </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Card style={{height:150,width:175,backgroundColor:'black'}}>
                <View style={{width:'100%',height:'100%',backgroundColor:'yellow'}}>
                <ImageBackground
                 source={{uri:'https://wallpapercave.com/wp/qd08Jn5.jpg'}}
                 style={{height:'100%',width:'100%'}}
                >
                <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'black',opacity:0.6}}>
                  <Text style={{color:'white',fontSize:30}}>Other</Text>
                </View>
                </ImageBackground>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          </View>
        </View>
        </>
      )
    }
}


const mapStateToProps = state => ({
  getCategoriesState:state.getCategoriesState

});

const mapDispatchToProps = dispatch => {
  return { 
    getCategories:()=>dispatch(getCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category)


