import React, { Component } from 'react';
import { View,ImageBackground,TouchableWithoutFeedback} from 'react-native';
import { Card,Text,DeckSwiper} from 'native-base';
import { connect } from 'react-redux';
import {eventByCategory} from '../_actions/home'

class EventByCategory extends Component{
    constructor(){
        super();
        this.state={
          homeIcon:true,
          categoryIcon:false,
          navigateIcon:false,
          events:[],
        }
    }

    static navigationOptions = {
        header: null
      }

    componentDidMount(){
        const { navigation } = this.props;
        this.props.eventByCategory(navigation.getParam('id'))
        if (this.state.events.length<=0){
          this.state.events = this.props.evtByCat.data
        } 
      }

    render(){
      const { data,isLoading} = this.props.evtByCat;

      if(isLoading){
        const { navigation } = this.props;

        return(
            <Text>{navigation.getParam('id')}</Text>
        )
      }

        return(
            <>

        <View style={{height:80,backgroundColor:'white',justifyContent:'center',paddingLeft:30}}>
          <Text style={{width:'100%',textAlign:'center',fontSize:25,color:'#d10202'}}>Event By Category</Text>
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
        
        // const { navigation } = this.props;

        // return(
        //     <Text>{navigation.getParam('id')}</Text>
        // )
    }
}

const mapStateToProps = state => ({
    evtByCat:state.evtByCat
  
  });
  
  const mapDispatchToProps = dispatch => {
    return { 
      eventByCategory:()=>dispatch(eventByCategory())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EventByCategory)