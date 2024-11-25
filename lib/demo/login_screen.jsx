import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextFormField } from "./textformfield";
import CheckBox from 'react-native-check-box'



export const Login = () => {
    return (
        <SafeAreaView >
            <Text style={[styles.text, { textAlign: "center" }]}>
                Login
            </Text>
            <TextFormField />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <CheckBox />
                <Text style={{color:'blue', paddingLeft: 10, paddingTop: 3 }}>Remember<Text style={{color:'red'}}> Me</Text></Text>

            </View>
            <View style={{height:'80%'}} />
            <TouchableOpacity style={{ backgroundColor: "#ff6347", borderRadius: 28, marginHorizontal: 24 }}>
                <Text style={{ paddingVertical: 16, fontSize: 18, fontWeight: '500', color: 'white', alignSelf: 'center' }}>
                    Sign In
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#ff826c',
        fontSize: 30,
        fontWeight: '700',


    }
})