import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Mega from './components/mega/Mega';
// import Diferenciar from './components/Diferenciar';
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={7}/>
        {/* <Diferenciar/> */}
        {/* <Contador inicial={100} passo={13}/>
        <Botao/>
        <Titulo
            principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto"
        />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})