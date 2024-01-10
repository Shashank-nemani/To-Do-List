import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const FeatureScreen = ({navigation}) => {
    return (
        <View>
            <Button  
                title="Home"  
                onPress={() => navigation.navigate("To-Do-List")}
            />
        </View>
    );
};
export default FeatureScreen;

const styles = StyleSheet.create({});