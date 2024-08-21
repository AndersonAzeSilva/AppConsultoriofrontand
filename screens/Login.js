
import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../estilos/EstiloPrincipal';

export default function Login({navigation}) { //usando o objeto navigation para chamar a próxima tela

  const [email, setEmail] = useState(null) //criando uma váriavel e-mail de estado, para salvar o e-mail do usuário
  const [password, setPassword] = useState(null) //criando a mesma função para a senha do usuário

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}] //Aqui você precisa ficar atento no nome que você colocou lá na tela do App.js, tem que ser o mesmo nome
    })
  }

  return (
    //criando uma lista de estilos
    <View style={[styles.container, specificStyle.especificContainer]}>
      <Text h3>App consultorio</Text>
      <Input
        placeholder="E-mail" //adicionando o campo text e-mail
        leftIcon={{ type: 'font-awesome', name: 'envelope' }} //adicionando o icone de e-mail
        onChangeText={value => setEmail(value)} //Toda vez que o usuário digitar o e-mail dele, esse e-mail irá salvar na variavel e-mail
        keyboardType="email-address"
      />
      <Input
        placeholder="Digite a sua Senha" //adicionando o campo text Senha
        leftIcon={{ type: 'font-awesome', name: 'lock' }} //adicionando o icone de senha
        onChangeText={value => setPassword(value)} //Toda vez que o usuário digitar a senha dele, essa senha irá salvar na variavel senha
        secureTextEntry={true} //função para ocultando a senha
      />
      <Button //impotando o botão do native elements
        icon={
          <Icon //impotando o botão do native elements
            name="check"
            size={15}
            color="white"
          />
        }
        title="Entrar" //Titulo do botão
        onPress={() => entrar()} //criando a função entrar quando clicar no botão
      />

    </View>
  );
}

//criando um estilo especifico 
const specificStyle = StyleSheet.create({
  especificContainer: {
    backgroundColor: "#fff"
  }
})