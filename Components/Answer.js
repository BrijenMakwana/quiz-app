import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Answer = (props) => {
    const [answerColor,setAnswerColor] = useState("#ffba08");

    useEffect(() => {
        setAnswerColor("#ffba08")
    } , [props.answer]);

    const isCorrectAnswer = () => {
        if(props.answer === props.correct_answer){
            setAnswerColor("#B4E197");
        }else{
            setAnswerColor("#ff0000");
        }
    }
    return(
        <Pressable
            style={[styles.container,{
                backgroundColor: answerColor
            }]}
            onPress={isCorrectAnswer}
        >
            <Text style={styles.answer}>{props.answer}</Text>
        </Pressable>
    );
}

export default Answer;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
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