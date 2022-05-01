import React, {useEffect, useState} from "react";
import {SafeAreaView,StyleSheet,View,Text} from "react-native";
import Question from "../Components/Question";
import Answer from "../Components/Answer";
import axios from "axios";

const QuizScreen = () => {
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState(0);

    useEffect(()=>{
        axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
            .then(function (response) {
                // handle success
                setQuestions(response.data.results);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },[])

    return (
        <SafeAreaView style={styles.container}>
            {
                questions.length > 0 ?
                <>
                    {
                        <Question question={questions[currentQuestion].question}/>
                    }
                    <View style={styles.answerContainer}>
                        {
                            questions[currentQuestion].incorrect_answers.map((item,index)=>(
                                <Answer key={index} answer={item}/>
                            ))
                        }
                        {
                            <Answer answer={questions[currentQuestion].correct_answer}/>
                        }
                    </View>
                </> :
                    <Text>Loading...</Text>
            }


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