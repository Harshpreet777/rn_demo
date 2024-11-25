import {StyleSheet, Text, View,SafeAreaView} from 'react-native';

const WrappedComponent = () => {
  return (
    <SafeAreaView style={[Styles.view]}>
      <Text> This is Wrapped Component</Text>
    </SafeAreaView>
  );
};

const newComponent = (WrappedComponent, title) => {
  return props => {
    return (
      <SafeAreaView style={[Styles.view]}>
        <Text>{title}</Text>
        <WrappedComponent {...props} />
      </SafeAreaView>
    );
  };
};

export const HocDemo = newComponent(WrappedComponent, 'This is Hoc Example');

const Styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
