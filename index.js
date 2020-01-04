import React, { Component } from "react";
import {Text} from "react-native";

export default class UpperCase extends Component {
  render() {
    const { text } = this.props;
    return <Text>{text.toUpperCase()}</Text>;
  }
}
