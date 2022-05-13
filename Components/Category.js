import React, {useEffect, useState} from "react";
import {SafeAreaView,StyleSheet,View,Text,Pressable,Image} from "react-native";
import {useNavigation} from "@react-navigation/native";


const Category = (props) => {
    const navigation = useNavigation();

    const goToQuiz = () => {
        navigation.navigate("Quiz",{
            category: props.id
        })
    }

    return (
        <Pressable style={styles.container} onPress={goToQuiz}>
            <Image source={props.image} style={styles.image}/>
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
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
        borderRadius: 10,
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