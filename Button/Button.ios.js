import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

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
            <View style={[props.style, {borderColor: "red", borderWidth: 2}]}>{props?.children}</View>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    onPress: () =>
    {
    }
}

export default Button;