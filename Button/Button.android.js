import React from 'react';
import {
    View,
} from 'react-native';

import {TouchableOpacity} from "react-native-gesture-handler";

const ButtonAndroid = (props) =>
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

ButtonAndroid.defaultProps = {
    onPress: () =>
    {
    }
}

export default ButtonAndroid;