import React from 'react';
import {View,Text,StyleSheet}  from 'react-native';

const Answer = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.answer}>Answer</Text>
        </View>
    );
}

export default Answer;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#ffba08",
        borderRadius: 5,
        padding: 10,
        marginTop: 30
    },
    answer:{
        fontSize: 18,
        color: "#000",
        fontWeight: "400"
    }
});