import React from "react";
import { Text, StyleSheet, Image, SafeAreaView,Pressable} from "react-native";
import {useNavigation,useRoute} from "@react-navigation/native";

const FinishScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const image = route.params.score > 5 ? require("../assets/images/trophy.png") : require("../assets/images/sorry.png");
    const text = route.params.score > 5 ? "Congratulations!" : "Sorry!";

    const goToHome =() =>{
        navigation.reset(
            {
                index: 0,
                routes:[{name: "Home"}]
            }
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Image source={image} style={styles.image}/>
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.title}>Your score is</Text>
            <Text style={styles.score}>{route.params.score}/10</Text>
            <Pressable style={styles.buttonContainer} onPress={goToHome}>
                <Text style={styles.buttonText}>Finish</Text>
            </Pressable>
        </SafeAreaView>
    )
}


export default FinishScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3c6e71",
        alignItems: "center",
        // justifyContent: "center"
    },
    image:{
        width: 100,
        height: 100,
        marginTop: 40
    },
    title:{
        fontSize: 30,
        color: "#faf0ca",
        fontWeight: "600",
        marginTop: 10
    },
    score:{
        fontSize: 40,
        color: "#fff",
        fontWeight: "600",
        marginTop: 10
    },
    buttonContainer:{
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 50
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "500",
        color: "#000"
    }
})