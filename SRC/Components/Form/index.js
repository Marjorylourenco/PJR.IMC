import React,{useState} from "react";
import { flushSync } from "react-dom";
import{ View,Text, TextInput,Button} from "react-native";

export default function Form(){
    const[heigt,setHeight] =useState(null)
    const[weight,setWeight] =useState(null)
    const[messageImc,setMessageImc] = useState("Preencha seu peso e sua altura");
    const[imc,setImc] =useState(null)
    const[textButton,setTextButton] =useState("Calcular IMC")


    function imcCalculator(){
        return setImc((weight/(heigt*heigt)).toFixed(2))
    }


    return( 
    <View>
       
       <View>

        <Text>Altura</Text>
        <TextInput
        
        placeholder="Ex. 1.75"
        keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
        
        placeholder="Ex. 84.705"
        keyboardType="numeric"
        />

        <Button
        
        title={textButton}
        
        />

       </View>


    </View>);
}