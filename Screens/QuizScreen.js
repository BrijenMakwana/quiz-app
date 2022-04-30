import React from "react";
import {SafeAreaView,Text,StyleSheet} from "react-native";
import Question from "../Components/Question";

const QuizScreen = () => {
    return (
        <SafeAreaView>
            <Question/>
        </SafeAreaView>
    );
};

export default QuizScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    }
});