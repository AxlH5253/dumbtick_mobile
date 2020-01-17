import React, { Component } from 'react';
import EventByCategory from './EventByCategory';
import Category from './Category';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class CategoryNavigation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <CategoryPage/>
        )
    }
}

const CategoryNavigator = createStackNavigator({
    category: {screen: Category},
    eventby: {screen: EventByCategory},
});

const CategoryPage = createAppContainer(CategoryNavigator)

export default CategoryNavigation