import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import touchableOpacityStyle from './CircleTouchableOpacityStyle';

class CircleTouchableOpacity extends React.Component {

    render() {
        const { item } = this.props;
        return (
            <View style={{ marginLeft: 10 }}>
                <TouchableOpacity style={touchableOpacityStyle.circleTouchableOpacity}>
                    <Image source={ } style={{
                        borderRadius: 25, height: 50, width: 50
                    }} />
                </TouchableOpacity>
            </View >
        )
    }
}

export default CircleTouchableOpacity