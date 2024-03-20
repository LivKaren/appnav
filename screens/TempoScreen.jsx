import { View } from "react-native"; // importei do native
import { Text } from "react-native-paper"; // importei do native paper
import styles from "../config/styles";
import { useEffect } from "react";

const API_KEY = "#%#%@#@#¨@#¨@#¨@#¨@#¨@#";//peguem a de vocês
const CITY_NAME = "Joinville, SC";//peguem a de vocês


export default function TempoScreen(){

    useEffect(()=>{
        const fetchTempo = async () =>{
            // recebe o valor do api em texto 
            const resposta = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`);
            
            // basico de fetch json
            // tranforma o texto em json
            const data = await resposta.json();
            console.log(data);
        }
    })

    return(
        <View
            style={styles.container}
        >
            <Text
                variant="bodyLarge" // variantes que só o paper possui
            >Tempo</Text>
        </View>
    )
}


