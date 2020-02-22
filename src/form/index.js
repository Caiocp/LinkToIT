import React, { useRef } from "react";
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native'
import { Form } from "@unform/mobile";
import Input from "./Input";

export default function SignIn() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit} >
        <Input label="Nome" name="name" type="text" /> 

        <TouchableOpacity onPress={() => formRef.current.submitForm()} style={styles.button}>
            <Text  style={styles.buttonText}>Submit</Text> 
        </TouchableOpacity>
    </Form>
  );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "#035AA6",
        marginTop: 20,
        height: 40,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#035AA6"
    },
    buttonText: {
        color: 'powderblue',
        fontWeight: 'bold',
        fontSize: 16,
    }
})