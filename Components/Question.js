import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Question = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{props.currentQuestion + 1} / {props.totalQuestions}</Text>
            </View>
            <Text style={styles.question}>
                {props.question.replace(/&quot;|&#039;/g,"")}

            </Text>
        </View>
    )
}


export default Question;

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        backgroundColor: "#3c6e71",
        minHeight: 200,
        padding: 10,
        alignSelf: "center",
        marginTop: 30,
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