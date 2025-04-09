import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './estoque';
const Stack = createStackNavigator();

function MyStack({navigation}){
    return(
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name='login' component={Log}/>
            <Stack.Screen name='estoque' component={Home}/>
        </Stack.Navigator>
    );
}

export default function Log(){
    return(
        <View style={styles.main}>    
            <Text>
                LOGIN
            </Text>

            <TextInput
            style={styles.input}
            placeholder='email'
            
            />

            <TextInput
            style={styles.input}
            placeholder='senha'          
            />
            
            <Button   
            title='ENTRAR'
            onPress={() => navigation.navigate('Home')}
            
            />     

    </View>
    );
    
}

const styles = StyleSheet.create({


    input:{
        flex:1,
        backgroundColor:'red'
    }
})
