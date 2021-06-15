import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import FriendPost from '../friendPost/FriendPost'

class ListFriendPost extends React.Component {
    state = {
        friend: [
            { id: '0', imageAvt: 'https://cdn.fakercloud.com/avatars/bagawarman_128.jpg', name: 'Lynette Wyman', imagePost: 'https://www.nightcity.love/build/images/og-share-3248bc34.jpg' },
            { id: '1', imageAvt: 'https://cdn.fakercloud.com/avatars/commadelimited_128.jpg', name: 'Norman', imagePost: 'https://cdn.mos.cms.futurecdn.net/vAgcJH6fBf6dTaBKwcuZEb.jpg' },
            { id: '2', imageAvt: 'https://cdn.fakercloud.com/avatars/falconerie_128.jpg', name: 'Lynette Wyman', imagePost: 'https://bloganh.net/wp-content/uploads/2020/05/cach-tao-dang-quay-lung-voi-ong-kinh.jpg' },
            { id: '3', imageAvt: 'https://cdn.fakercloud.com/avatars/n3dmax_128.jpg', name: 'Norman', imagePost: 'https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg' },
            { id: '4', imageAvt: 'https://cdn.fakercloud.com/avatars/fabbrucci_128.jpg', name: 'Amber Pacocha', imagePost: 'https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5_thumb.jpg' },
            { id: '5', imageAvt: 'https://cdn.fakercloud.com/avatars/bagawarman_128.jpg', name: 'Bkedsss', imagePost: 'https://yeudohoa.vn/wp-content/uploads/2019/05/1492692.jpg' },
            { id: '6', imageAvt: 'https://cdn.fakercloud.com/avatars/thomasschrijer_128.jpg', name: 'Faith Fadel', imagePost: 'https://doanhnhanplus.vn/wp-content/uploads/2017/12/DN-Anh-chup-Da-Lat-BaiDN-221217-1.jpg' },

        ]
    }

    renderItem = ({ item }) => {
        return (
            <FriendPost nameFriend={item.name} imageAvt={item.imageAvt} imagePost={item.imagePost} />
        )
    }

    render() {
        return (
            <FlatList

                data={this.state.friend}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
            />
        )
    }
}

export default ListFriendPost