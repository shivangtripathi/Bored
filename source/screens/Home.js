import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import  {
  activities_fetch,
  change_variable
} from '../actions';
import LottieView from 'lottie-react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


class Home extends Component{

  constructor(props) {
    super(props)
  }
  handlePress(){
     this.props.activities_fetch(this.props.selected);
    
    }
    componentWillUnmount(){
      this.props.change_variable("activity",undefined);
      this.props.change_variable("loading",false);
    }
    renderButton(){
      if(this.props.loading)
      {
        return(
            <View style={ styles.button}>
                <ActivityIndicator size={ "small" } color={ "#fff"} />
            </View>
        )
      }
      else{
        return(
          <>
          {typeof(this.props.activity)==="undefined" ? (
          <TouchableOpacity onPress={()=>this.handlePress()} style={styles.button}>
          <Text style={styles.button_text}>Fetch Task</Text>
          </TouchableOpacity>) : (
            <TouchableOpacity onPress={()=>this.handlePress()} style={styles.button}>
            <Text style={styles.button_text}>Refresh Task</Text>
            </TouchableOpacity>
          )
     }
          </>
        )
      }
    }
    
    renderTask(){
      if(typeof(this.props.activity)==="undefined")
      {
        return(
          <View style={{backgroundColor:'#fff',flex:1}}>
          <LottieView source={require('../assets/home-loader.json')} autoPlay loop  speed={0.5}/>
          </View>
        )
      }
      return(
        <View style={{backgroundColor:'#fff',borderRadius:10,borderWidth:2,paddingHorizontal:20,paddingVertical:10,alignSelf:'center',marginTop:80}}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#3E424b'}}>{this.props.activity}</Text>
        </View>
      )
    }
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:'#fff'}}>
        <View style={{ height: 60 }}>
          <Text style={{fontSize:24,fontWeight:'bold',marginTop:20,padding:10}}>Collections for you </Text>
        </View>
    <View style={{flex:2,paddingHorizontal:20}}>
        {this.renderTask()}
        </View>
        <View style={{flex:1,paddingHorizontal:20 ,marginTop:40}}>
        {this.renderButton()}
        </View>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'red',
    paddingVertical:10,
    paddingHorizontal:20,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:20,
    width:200,
    borderRadius:5
  },
  button_text:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  }
})

const mapStateToProps = (state) =>{
  const {

    activity,
    loading,
    selected,


  } = state.variables;
  return {
      
    activity,
    loading,
    selected

  };
}
export default connect( mapStateToProps, {

  change_variable,
  activities_fetch

} )( Home );


