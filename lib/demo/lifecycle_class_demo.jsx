import {Component} from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import {CommonButton} from '../common_components/common_button';

export class ClassLifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log(`ComponentDidMount ${this.state.count}`);
  }
  componentDidUpdate() {
    console.log(`ComponentDidUpdate ${this.state.count}`);
  }
  componentWillUnmount() {
    console.log(`ComponentWillUnMount ${this.state.count}`);
  }
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
        <Text style={{color: 'white', fontSize: 30, alignSelf: 'center'}}>
          Count= ${this.state.count}
        </Text>
        <CommonButton
          title="Press Me"
          onPress={() => {
            this.setState({count: this.state.count + 1});
          }}></CommonButton>
      </SafeAreaView>
    );
  }
}
