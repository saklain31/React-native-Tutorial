import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const ImageDetail = ({imageSource,imageScore, title}) => {
  // console.log(props);
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle2}>{title}</Text>
      <Text style={styles.textStyle2}>Image Score - {imageScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle : {
    fontSize : 30
  },
  textStyle2 : {
    fontSize : 20
  }
});

export default ImageDetail;
