import React,{Component} from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'

import { connect } from 'react-redux';
import {
    change_variable
} from '../actions';

const labels = [
    {id:1,title:'relaxation'},
    {id:2,title:'DIY'},
    {id:3,title:'recreational'},
    {id:4,title:'education'},
    {id:5,title:'cooking'},
    {id:6,title:'social'},
    {id:7,title:'music'},
    {id:8,title:'busywork'}
] 


class TypeSelection extends Component{
    constructor(props){
        super(props);
    }

    handleSelection = (item) =>{
        var selected = this.props.selected;
        if(selected.includes(item)){
            var new_selected = selected.filter((val)=> val !== item);
        }
        else{
            var new_selected = [...selected,item];
        }
        this.props.change_variable("selected",new_selected);
    }

    RenderGenres = (labels) =>{
        return(
            <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:20,paddingHorizontal:20}}>
            {labels.map((item,index)=>{
                if(this.props.selected.includes(item.title)){
                    return(
                        <TouchableOpacity key={index} style={{paddingVertical:10,borderRadius:10,
                            paddingHorizontal:20,borderWidth:2,borderColor:'red',backgroundColor:'red',justifyContent:'center',alignItems:'center',margin:10}} onPress={()=> this.handleSelection(item.title)}>
                            <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }
                else
                return(
                    <TouchableOpacity key={index} style={{paddingVertical:10,borderRadius:10,
                    paddingHorizontal:20,borderWidth:2,borderColor:'red',justifyContent:'center',alignItems:'center',margin:10}} onPress={()=> this.handleSelection(item.title)}>
                    <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                </TouchableOpacity>
                )
            })}
            </View>
        )
    }


    render(){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <Text style={{fontSize:24,fontWeight:'bold',padding:20}}>Select some type of recommendations</Text>
                {this.RenderGenres(labels)}
                <TouchableOpacity disabled={this.props.selected.length<1} style={{backgroundColor:this.props.selected.length<1?'rgba(255,0,0,0.5)':'red',bottom:0,position:'absolute',paddingHorizontal:20,paddingVertical:10,width:'100%',alignItems:'center',justifyContent:'center'}} onPress={()=>this.props.navigation.push('Home')}>
                    <Text style={{fontSize:22,color:'white'}}>Continue </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const mapStateToProps = (state) =>{
    const {
        
        selected,

    } = state.variables;
    return {
        
        selected

    };
}
export default connect( mapStateToProps, {

    change_variable,

} )( TypeSelection );


