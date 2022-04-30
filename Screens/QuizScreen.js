import React from "react";
import {SafeAreaView,StyleSheet,View} from "react-native";
import Question from "../Components/Question";
import Answer from "../Components/Answer";

const QuizScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Question/>
            <View style={styles.answerContainer}>
                <Answer/>
                <Answer/>
                <Answer/>
                <Answer/>
            </View>
        </SafeAreaView>
    );
};

export default QuizScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    answerContainer:{
        justifyContent: "center",

    }
});