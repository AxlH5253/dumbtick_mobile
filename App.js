import React, { Component } from 'react';
import { StyleSheet,View,ImageBackground,Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import{ createAppContainer } from 'react-navigation';
import { Container, Icon, Text, Button } from 'native-base';
import Tabs from './src/screens/tabs';

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
       <Screen/>
     </Container>
  );
  }
}

class FirstScreen extends Component{
  constructor(){
    super()
    this.state={
      img :'',
      imgList:['https://i.ibb.co/gSr2dsk/1st.png','https://i.ibb.co/Sn1d7G6/2nd.png','https://i.ibb.co/9Td5N8F/3rd.png'],
      indx:0
    }
  }

  componentDidMount(){
    if (this.state.img == ''){
      this.setState({img:this.state.imgList[0]})
    }
   }

  static navigationOptions = { 
    header: null
  }


  render(){
    if(this.state.img == this.state.imgList[2]){
      setTimeout(()=>{
        this.setState({img:this.state.imgList[0]})
      },3000)
    }else

    if(this.state.img == this.state.imgList[1]){
      setTimeout(()=>{
        this.setState({img:this.state.imgList[2]})
      },3000)
    }else

    if(this.state.img == this.state.imgList[0]){
      setTimeout(()=>{
        this.setState({img:this.state.imgList[1]})
      },3000)
    }

    return(
      <ImageBackground
        source={{uri: this.state.img}}
        style={{ resizeMode: 'cover',flex:1}}>
        <View style={{height:400,justifyContent:'center',width:'100%',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:60,textAlign:'center',fontFamily:'comic sans',fontWeight:'bold',marginBottom:30}}>Dumb-Tick</Text>
          <Text style={{color:'white',width:300,fontSize:20,textAlign:'center',fontFamily:'comic sans',fontWeight:'bold'}}>Find events easily and sell event tickets easily</Text>
        </View>
        <View style={{display:'flex',height:150,justifyContent:'center',alignItems:'center',width:'100%'}}>
          <Button style={{width:'80%',backgroundColor:'#d10202',borderRadius:10}}
                  onPress={()=>this.props.navigation.navigate('tabs')}>
            <Text style={{width:'100%',textAlign:'center',fontSize:25}}>Continue</Text>
          </Button>
        </View>
      </ImageBackground>
    )
  }
}


const ScreenNavigator = createStackNavigator({
  firstscreen: {screen: FirstScreen},
  tabs: {screen: Tabs},
});

const Screen = createAppContainer(ScreenNavigator)


export default App;
