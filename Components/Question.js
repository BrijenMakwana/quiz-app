import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Question = () => {
    return(
        <View style={styles.container}>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>5 / 10</Text>
            </View>
            <Text style={styles.question}>What is India's capitol?What is India's capitol?What is India's capitol?What is India's capitol?</Text>
        </View>
    )
}


export default Question;

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        backgroundColor: "#ff4d6d",
        minHeight: 200,
        padding: 10,
        alignSelf: "center",
        marginTop: 50,
        borderRadius: 10,
    },
    numberContainer:{
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderBottomRightRadius: 10
    },
    number:{
        fontSize: 20,
        color: "#000",
        fontWeight: "bold"
    },
    question:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "500"
    }
})