import React, { useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";

export const RefreshDemo = () => {
    const [isRefresh, setIsRefreshing] = useState(false);

    return (
        <SafeAreaView>
            <Text>
                Pull Down to refresh
            </Text>


        </SafeAreaView>
    );

};