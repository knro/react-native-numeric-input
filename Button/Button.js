import React, {Component} from 'react';
import {
    View,
    Text,
    Pressable,
} from 'react-native';

const Button = (props) =>
{
    return (
        <Pressable
            style={({pressed}) => [
                props.style,
                {
                    backgroundColor: pressed
                        ? '#e06a0d'
                        : '#3b3737'
                }]}
            disabled={props.disabled}
            onPress={props.onPress}>
            {props.children}
        </Pressable>
    )
}

Button.defaultProps = {
    onPress: () =>
    {
    }
}

export default Button;