import React from 'react';
import { StyleSheet, Text, View,TextInput, Button, Image} from 'react-native';

export default function Home(){
    return(
        <View>
            <Text>
                CAFE
                <Image source={{uri:'https://www.google.com/imgres?q=cafe&imgurl=https%3A%2F%2Fforbes.com.br%2Fwp-content%2Fuploads%2F2021%2F08%2Fagro-cafe%25CC%2581-160821-Wenderson-Araujo_Trilux_CNA.jpg&imgrefurl=https%3A%2F%2Fforbes.com.br%2Fforbesagro%2F2021%2F08%2Fse-o-seu-cafe-esta-mais-forte-culpe-as-mudancas-climaticas%2F&docid=4UJeqk2eZmqVHM&tbnid=xDks5Y64Yb0G2M&vet=12ahUKEwiN3IH51cuMAxX3p5UCHdh8NIUQM3oFCIUBEAA..i&w=2000&h=1333&hcb=2&ved=2ahUKEwiN3IH51cuMAxX3p5UCHdh8NIUQM3oFCIUBEAA'}}
            
            style={{width: 320, height: 200}}
            />
            </Text>
        </View>
    );
}