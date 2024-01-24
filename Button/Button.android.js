import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

//import {TouchableOpacity} from "react-native-gesture-handler";

const Button = (props) =>
{
    return (
        <TouchableOpacity
            style={({pressed}) => [
                {
                    backgroundColor: pressed
                        ? '#e06a0d'
                        : '#3b3737'
                }]}
            disabled={props.disabled}
            onPress={props.onPress}>
            <View style={props.style}>{props?.children}</View>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    onPress: () =>
    {
    }
}

export default Button;