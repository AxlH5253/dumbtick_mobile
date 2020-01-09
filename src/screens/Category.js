import React, { Component } from 'react';
import { StyleSheet,ScrollView,View,Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
import{ createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import axios from 'axios';

class Category extends Component{

  render(){
    return(
    <CategoryList/>
    )
  }
}

class CategoryList extends Component{
  constructor(){
    super();
    this.state={
      categories:[]
    }
  }
  
  componentDidMount() {
    axios.get(`http://192.168.1.15:5000/api/v1/categories`)
      .then(res => {
        this.setState({ categories:res.data });
      })
  }
  render(){
    return(
      <Content>
          <Separator bordered>
            <Text style={styles.Title}>List Of Categories</Text>
          </Separator>
          {this.state.categories.map((item,index)=>
          <ListItem>
            <Text>{item.name}</Text>
          </ListItem>
          )}
        </Content>
    )
  }
}

const styles = StyleSheet.create({
  Title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    width:'100%',
  }
});

export default Category