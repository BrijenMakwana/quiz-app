import React, {useEffect, useState} from "react";
import {SafeAreaView,StyleSheet,View,Text,Pressable,ActivityIndicator,Platform} from "react-native";
import Question from "../Components/Question";
import Answer from "../Components/Answer";
import axios from "axios";
import {useRoute,useNavigation} from "@react-navigation/native";



const QuizScreen = () => {
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [isAnswered,setIsAnswered] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(()=>{
        axios.get(`https://opentdb.com/api.php?amount=10&category=${route.params.category}&difficulty=easy&type=multiple`)
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
        else{
            navigation.navigate("Finish",{
                score:score
            });
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
                    <View style={[styles.progressBar,{
                        width: (currentQuestion+1)*10 + '%'
                    }]}/>
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
                    {/*next button*/}
                    <Pressable style={styles.buttonContainer} onPress={nextQuestion}>
                        <Text style={styles.buttonText}>{isAnswered ? "Next" : "Skip"}</Text>
                    </Pressable>
                </> :
                    <ActivityIndicator color="#3c6e71" size="large" style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        // alignSelf: 'center'
                    }}/>
            }

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
        marginTop: Platform.OS === "android" ? 50 : 10
    },
    score:{
        fontSize: 20
    },
    progressBar:{
        backgroundColor: "#3c6e71",
        height: 5,
        borderRadius:10,
        marginTop: 20
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