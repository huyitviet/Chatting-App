import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './TitleHomeStyle'
class Title extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.textHello}>Hello</Text>
                <Text style={styles.textNamw}>ANastasia</Text>
            </View>
        )
    }
}

export default Title