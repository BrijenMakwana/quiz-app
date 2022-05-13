import React, {useEffect, useState} from "react";
import {SafeAreaView,StyleSheet,View,Text,Pressable,FlatList} from "react-native";
import Category from "../Components/Category";



const HomeScreen = () => {
const categories = [
    {
        id: "9",
        title: "General Knowledge",
        image: require("../assets/images/GK.png"),
    },
    {
        id: "10",
        title: "Books",
        image: require("../assets/images/book.png"),
    },
    {
        id: "11",
        title: "Films",
        image: require("../assets/images/film-slate.png"),
    },
    {
        id: "12",
        title: "Music",
        image: require("../assets/images/musical-note.png"),
    },
    {
        id: "14",
        title: "Television",
        image: require("../assets/images/television.png"),
    },
    {
        id: "15",
        title: "Video Games",
        image: require("../assets/images/joystick.png"),
    },
    {
        id: "17",
        title: "Science and Nature",
        image: require("../assets/images/planet-earth.png"),
    },
    {
        id: "18",
        title: "Computers",
        image: require("../assets/images/monitor.png"),
    },
    {
        id: "19",
        title: "Mathematics",
        image: require("../assets/images/calculator.png"),
    },
    {
        id: "20",
        title: "Mythology",
        image: require("../assets/images/man.png"),
    },
    {
        id: "21",
        title: "Sports",
        image: require("../assets/images/sports.png"),
    },
    {
        id: "22",
        title: "Geography",
        image: require("../assets/images/globe.png"),
    },
    {
        id: "23",
        title: "History",
        image: require("../assets/images/history.png"),
    },
    {
        id: "24",
        title: "Politics",
        image: require("../assets/images/politician.png"),
    },
    {
        id: "25",
        title: "Art",
        image: require("../assets/images/palette.png"),
    },
    {
        id: "26",
        title: "Celebrities",
        image: require("../assets/images/casting.png"),
    },
    {
        id: "27",
        title: "Animals",
        image: require("../assets/images/livestock.png"),
    },
    {
        id: "28",
        title: "Vehicles",
        image: require("../assets/images/car.png"),
    },
    {
        id: "32",
        title: "Cartoon",
        image: require("../assets/images/leonardo.png"),
    }
]


    return (
        <SafeAreaView style={styles.container}>
        <FlatList
            data={categories}
            renderItem={({item}) => <Category title={item.title} image={item.image} id={item.id}/>}
            keyextractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },

});