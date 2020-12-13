import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Moment from 'react-moment';
import mainStyle from '../Style';
const API_key = '47a19de78efacc542a29f7935294eb0d';

export default function SunInfos() {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        fetchWeather()
    }, []);

    function fetchWeather() {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=47.2173&lon=-1.5534&units=metric&appid=${API_key}`)
        .then(res => res.json())
        .then((response) => {
            if(response.daily instanceof Array) {
                setResponseData(response.daily[0])
            }
        })
    }

    return (
        <View style={mainStyle['flx-center']}>
            <Moment unix format="dddd DD MMMM" locale="fr">{responseData.sunrise}</Moment>
            <View>
                <Text>Levé du soleil</Text>
                <Moment unix format="HH:mm">{responseData.sunrise}</Moment>
            </View>
            <View>
                <Text>Couché du soleil</Text>
                <Moment unix format="HH:mm">{responseData.sunset}</Moment>
            </View>
        </View>
    )
}

var styles = {
    myClass: {
    color:"blue",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    myOtherClass: {
      color: "red"
    }
};