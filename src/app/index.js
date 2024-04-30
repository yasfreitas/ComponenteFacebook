import { View, Image, Text, text } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';


export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) =>{
    console.log(newText);

    
  }
  return (
    <View style={styles.container}>
      
      <Image 
        style={{width: '80%', height:80, marginBottom:30}}
        resizeMode= "contain"
        source={require('../../assets/facebook.png')}
      />

      <InputTexto label="" dica="Número de celular ou email"/>
      <InputTexto label="" dica="Senha" seguranca={true}/>

      <Botao btn="Entrar" cor='blue' src='' size='80%' texto='white'/>
      <View style={styles.cont}>
        <View style={styles.line} />
        <Text style={text}>ou</Text>
        <View style={styles.line} />
      </View>
      <Botao btn="Criar nova conta"  src='' texto='grey'/>
    </View>
  );
}

