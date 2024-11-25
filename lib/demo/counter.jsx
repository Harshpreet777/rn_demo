import React, { Component } from "react";
import { Button, Text, Touchable, TouchableOpacity, View } from "react-native";

export class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.onAdd = this.onAdd.bind(this)
        this.onDelete = this.onDelete.bind(this)

    }
    onAdd() {
        this.setState({
            count: this.state.count + 1,

        });
    };
    onDelete() {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <View style={{ marginTop: 30, alignItems: "center" }} >
                <Text style={{ fontSize: 30 }}>
                    Counter
                </Text>
                <Text style={{ fontSize: 30 }}>
                    {this.state.count}
                </Text>
                <TouchableOpacity onPress={this.onAdd.bind(this)} style={{ borderRadius: 10, backgroundColor: 'blue', padding: 10 }} ><Text style={{ color: "white", fontSize: 20 }}>Add</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.onDelete.bind(this)} style={{ borderRadius: 10, backgroundColor: "blue", padding: 10, marginTop: 10 }}><Text style={{ color: "white", fontSize: 20 }}>Delete</Text></TouchableOpacity>

            </View>

        );
    }

}