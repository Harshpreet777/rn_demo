import { ScrollView, StyleSheet, Text, View } from "react-native";

export const StyleScreen = () => {
    return (
        <ScrollView>

            <View  style={{ backgroundColor: "black", padding: 20, margin: 10, borderRadius: 20 }}>
                <View style={{
                    height: 200, backgroundColor: "blue", margin: 10, justifyContent: "center", alignItems: "center",
                    borderRadius: 20
                }}>
                    <Text style={[styles.redContiner, { color: 'red' }]}>Blue Text </Text>
                </View>
                <View style={{ height: 200, backgroundColor: 'red', margin: 10, alignItems: 'center', justifyContent: "center", borderRadius: 20 }}>
                    <Text style={styles.redContiner}>Red Text</Text>
                </View>
                <View style={{ height: 200, backgroundColor: 'red', margin: 10, alignItems: 'center', justifyContent: "center", borderRadius: 20 }}>
                    <Text style={styles.redContiner}>Red Text</Text>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    blueContiner: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900'
    },
    colorRed: {
        color: 'red'
    },
    redContiner: {
        color: 'black',
        fontSize: 20,
        fontWeight: "900"
    }
})