import { Alert } from 'react-native';
import {
    CHANGE_VARIABLE
} from './Type';
import { 
	base_url,
} from './Variables';

export const activities_fetch = ( activity_type ) => {
    return (dispatch)=> {
        activities_fetch_helper({activity_type, dispatch });
    }
}


const activities_fetch_helper = async ({activity_type, dispatch }) => {
    dispatch({ type: CHANGE_VARIABLE, payload: { key:'loading',value: true } });
    var type =  activity_type[Math.floor(Math.random() * activity_type.length)];
    const activities = async () => {
        var url = 'http://www.boredapi.com/api/activity?type='+type
        let response = await fetch(
            url
        );
        let json = await response.json();
        return json.activity;
      }
    activities().then((data)=>{
        dispatch({ type: CHANGE_VARIABLE, payload: { key:'loading',value: false } });
        dispatch({ type: CHANGE_VARIABLE, payload: { key:'activity',value: data } });
    });
}
