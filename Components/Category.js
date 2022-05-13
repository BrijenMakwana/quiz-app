import React, {useEffect, useState} from "react";
import {SafeAreaView,StyleSheet,View,Text,Pressable,Image} from "react-native";


const Category = (props) => {

    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image}/>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        elevation:5,
        shadowOffset:{
            height:5,
            width:5
        }
    },
    image:{
        width: 50,
        height: 50,
        marginLeft: 10
    },
    title:{
        fontSize: 20,
        marginLeft: 30,
        color: "#000",
        fontWeight: "500"
    }

});