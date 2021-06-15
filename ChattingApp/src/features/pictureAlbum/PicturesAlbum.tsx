import React from 'react';
import {Image, View} from 'react-native';
import picturesAlbumStyles from './picturesAlbumStyle';

class PicturesAlbum extends React.Component {
  render() {
    return (
      <View style={picturesAlbumStyles.bottom}>
        <View style={picturesAlbumStyles.container}>
          <Image
            style={picturesAlbumStyles.imageMain}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg',
            }}
          />
        </View>

        <View style={picturesAlbumStyles.container2}>
          <Image
            style={picturesAlbumStyles.image}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg',
            }}
          />
          <Image
            style={picturesAlbumStyles.image}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg',
            }}
          />
        </View>
      </View>
    );
  }
}

export default PicturesAlbum;
