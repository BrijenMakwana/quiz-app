import React, {useEffect, useState} from "react";
import {SafeAreaView,StyleSheet,View,Text,Pressable} from "react-native";
import Question from "../Components/Question";
import Answer from "../Components/Answer";
import axios from "axios";

const QuizScreen = () => {
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [isAnswered,setIsAnswered] = useState(false);


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
    },[]);

    //next question

    const nextQuestion = () => {
        if(currentQuestion < questions.length-1){
            setCurrentQuestion(prev => prev + 1)
        }
        setIsAnswered(false);
    }

    //score

    const increaseScore = () => {
        setScore(prev => prev + 1)
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                questions.length > 0 ?
                <>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.score}>Score: {score}</Text>
                    </View>

                    {
                        <Question
                            question={questions[currentQuestion].question}
                            currentQuestion={currentQuestion}
                            totalQuestions={questions.length}
                        />
                    }
                    <View style={styles.answerContainer}>
                        {
                            questions[currentQuestion].incorrect_answers.map((item,index)=>(
                                <Answer
                                    key={index}
                                    answer={item}
                                    correct_answer={questions[currentQuestion].correct_answer}
                                    increaseScore={increaseScore}
                                    isAnswered={isAnswered}
                                    setIsAnswered={setIsAnswered}
                                />
                            ))
                        }
                        {
                            <Answer
                                answer={questions[currentQuestion].correct_answer}
                                correct_answer={questions[currentQuestion].correct_answer}
                                increaseScore={increaseScore}
                                isAnswered={isAnswered}
                                setIsAnswered={setIsAnswered}
                            />
                        }
                    </View>
                </> :
                    <Text>Loading...</Text>
            }

            {/*next button*/}
            <Pressable style={styles.buttonContainer} onPress={nextQuestion}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>


        </SafeAreaView>
    );
};

export default QuizScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    scoreContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: "#d9d9d9",
        marginRight: 20,
        borderRadius: 10,
        minWidth: 100,
        marginTop: 10

    },
    score:{
        fontSize: 20
    },
    answerContainer:{
        justifyContent: "center",

    },
    buttonContainer:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3c6e71",
        width: 100,
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
        alignSelf: "flex-end",
        marginRight: 20
    },
    buttonText:{
        color: "#fff",
        fontSize: 20
    }
});