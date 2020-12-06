import * as React from 'react'
import {Text, View} from 'react-native'

export default class InstaScreen extends React.Component{
    render(){
        return(
            <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text> Instagram </Text>
            </View>
        )
    }
}