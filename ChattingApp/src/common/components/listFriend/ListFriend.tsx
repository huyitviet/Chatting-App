import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import CircleTouchableOpacity from '../circleTouchablOpacity/CircleTouchableOpacity'

class FriendOnline extends React.Component {
    state = {
        friend: [
            { id: '0', image: 'https://cdn.fakercloud.com/avatars/bagawarman_128.jpg' },
            { id: '1', image: 'https://cdn.fakercloud.com/avatars/commadelimited_128.jpg' },
            { id: '2', image: 'https://cdn.fakercloud.com/avatars/falconerie_128.jpg' },
            { id: '3', image: 'https://cdn.fakercloud.com/avatars/n3dmax_128.jpg' },
            { id: '4', image: 'https://cdn.fakercloud.com/avatars/fabbrucci_128.jpg' },
            { id: '5', image: 'https://cdn.fakercloud.com/avatars/bagawarman_128.jpg' },
            { id: '6', image: 'https://cdn.fakercloud.com/avatars/thomasschrijer_128.jpg' },

        ]
    }

    renderItem = ({ item }) => {
        return (
            <CircleTouchableOpacity item={item.image} />
        )
    }

    render() {

        return (
            <FlatList
                horizontal={true}
                data={this.state.friend}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
            />
        )
    }
}

export default FriendOnline