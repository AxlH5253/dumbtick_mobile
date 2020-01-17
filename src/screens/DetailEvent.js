import React, { Component } from 'react';
import {Text,ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import {getDetailEvt} from '../_actions/home';
import { View,Card,Icon } from 'native-base';
import { Avatar} from 'react-native-elements';

class DetailEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataEvent:[]
        }
    }

    componentDidMount(){
        const { navigation } = this.props;
        this.props.getDetailEvt(navigation.getParam('id'))
    }

    static navigationOptions = {
       header: null
    }
  
    render(){
        const { data,isLoading} = this.props.getEventDetail;
        if(isLoading){
            return <Text>Loading</Text>
        }
        return(
            <View>
                {data.map((item)=>
                <View style={{backgroundColor:'white',width:'100%',height:'80%'}}>
                <ImageBackground
                    source={{uri: item.img}}
                    style={{height:'100%',width:'100%',alignItems:'center'}}
                    imageStyle={{}}>
                     <Card  style={{backgroundColor:'#fff',width:'90%',height:470,marginTop:90,elevation: 20}}>
                        <View style={{width:'100%',alignItems:'center',padding:10}}>
                            <Text style={{fontSize:25,textAlign:'center'}}>{item.title}</Text>
                        </View>

                        <View style={{marginTop:20,marginLeft:20,marginBottom:10}}>
                            <Text style={{marginTop:2}}>
                                <Icon style={{fontSize:20}} name='time' /> &nbsp; {item.startAt}
                            </Text>
                            <Text style={{marginTop:2}}>
                                <Icon style={{fontSize:20}} name='pin' /> &nbsp; {item.address}
                            </Text>
                        </View>

                        <View style={{width:'100%',alignItems:'flex-start',paddingLeft:20,paddingTop:10}}>
                            <Text style={{fontSize:14,textAlign:'left',fontWeight:'bold'}}>Event Description</Text>
                        </View>
                        <View style={{width:'100%',alignItems:'center',padding:10,paddingTop:4,paddingLeft:20}}>
                            <Text style={{fontSize:13,textAlign:'justify'}}>{item.description}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                                <View style={{width:'100%',alignItems:'flex-start',paddingLeft:20,paddingTop:10}}>
                                    <Text style={{fontSize:14,textAlign:'left',fontWeight:'bold'}}>Posted by</Text>
                                </View>
                                <View style={{paddingLeft:20,paddingTop:4}}>
                                    <Avatar rounded style={{width:80,height:80,borderRadius:'100%'}} source={{uri:item.createdBy.img}}/>
                                </View>
                            </View>

                            <View style={{flexDirection:'column'}}>
                                <View style={{width:'100%',alignItems:'flex-start',paddingLeft:20,paddingTop:10}}>
                                    <Text style={{fontSize:14,textAlign:'left',fontWeight:'bold'}}>Contact Person</Text>
                                </View>
                                <View style={{width:'100%',alignItems:'flex-start',paddingLeft:20}}>
                                    <Text style={{marginTop:10}}>
                                        <Icon style={{fontSize:20}} name='person' /> &nbsp; {item.createdBy.username}
                                    </Text>
                                    <Text style={{marginTop:3}}>
                                        <Icon style={{fontSize:20}} name='call' /> &nbsp; {item.createdBy.phonrNumber}
                                    </Text>
                                    <Text style={{marginTop:3}}>
                                        <Icon style={{fontSize:20}} name='mail' /> &nbsp; {item.createdBy.email}
                                    </Text>
                                </View>
                            </View>
                        </View>
                      </Card>
                </ImageBackground>
                </View>      
                )}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        getEventDetail: state.getEventDetail
    };
};

const mapDispatchToProps = dispatch => {
  return { 
    getDetailEvt:(id) => dispatch(getDetailEvt(id)),
  };
};

  export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent);