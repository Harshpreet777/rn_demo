import { Alert, Button, Text, View } from "react-native";

export const AlertDemo = ({ name = null || ' ' }) => {
    return (
        <View style={{ backgroundColor: 'blue', flex: 1, padding: 100 }}>
            {/* Alert is different for both android and ios, android have only 3 buttons and ios can have more than 3*/}
            <Button title="Alert" color='white' onPress={() => Alert.alert('Alert Title', 'Alert Message', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel')

                },
                {
                    text: 'Ok',
                    onPress: () => console.log('ok')

                },
                {
                    text: 'Ok',
                    onPress: () => console.log('ok')

                },
                {
                    text: 'Ok',
                    onPress: () => console.log('ok')

                },
                {
                    text: 'Ok',
                    onPress: () => console.log('ok')

                }
            ])}></Button>
            <Text style={{ color: "white", fontSize: 30 }}>
                Hello {name}
            </Text>
        </View>
    );
};