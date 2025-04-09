import React, {use, useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function Fale(){
    return(
        <View>
            <TextInput
            placeholder='NOME'
            
            />

            <TextInput
            placeholder='EMAIL'          
            />
        </View>
    );
}
