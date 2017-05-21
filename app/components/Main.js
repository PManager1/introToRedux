import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var Main = React.createClass({
    render(){
      return(
          <View style={styles.container}>
            <Text>
              Welcome to REact Native
            </Text>
          </View>
      );
    }
});

const styles = StyleSheet.create({
  conatiner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

var mapStateToProps = (state) => {
  return {
    text: state.text
  }
}
module.exports = connect(mapStateToProps)(Main);








//




















//
