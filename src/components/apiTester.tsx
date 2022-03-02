import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});
type MyProps = {
};
type MyState = {

};

export default class ApiTester extends Component<MyProps, MyState> {


  render() {
    const data = useSelector(state => state)
    const dispatch = useDispatch()

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => dispatch({ type: "LOGIN_GMAIL_REQUEST" })} style={styles.button}>
          <Text>Api Request</Text>
        </TouchableOpacity>
        <Text>{data}</Text>
      </View>
    );
  }
}
