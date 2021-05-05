import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';

class Splash extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
            <View style={{backgroundColor:'#fff',flex:2,justifyContent:'center',alignItems:'center'}}>
               <LottieView source={require('../assets/splash.json')} autoPlay loop={false}  speed={0.8}
               onAnimationFinish={()=>this.props.navigation.replace('TypeSelection')}/>
               </View>
            <View style={{flex:1,backgroundColor:'#fff',justifyContent:'flex-start',alignItems:'center'}}>
                 <Text style={{fontSize:32,letterSpacing:1.25,color:'#000',fontWeight:'bold',marginTop:40}}>BORED</Text>
            </View>
            </>
        )
    }
}

export default connect( null )( Splash );
