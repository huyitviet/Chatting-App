import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native'
import CicleImage from '../../../common/components/circleImageComponent/CircleImage';

class FriendPost extends React.Component {

    render() {
        const { nameFriend, imageAvt, imagePost } = this.props
        console.log('===>', imageAvt);

        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                <View style={{ flex: 10 }}>
                    <Image source={{ uri: imagePost }} style={{ height: 150, width: 350, borderTopRightRadius: 50, borderTopLeftRadius: 50 }} />
                </View>
                <View style={{ flex: 3, flexDirection: 'row', width: 350, height: 80, paddingLeft: 30, alignItems: 'center', backgroundColor: 'white', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, }}>
                    <View style={{ height: 50, width: 50 }}>
                        <Image source={{ uri: imageAvt }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text >{nameFriend}</Text>
                    </View >
                </View>
            </View >
        )
    }
}

export default FriendPost