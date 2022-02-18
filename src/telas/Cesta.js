import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
   return <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes da Cesta</Text>

      <View style={estilos.cesta}>
         <Text style={estilos.nome}> Cesta de Verduras</Text>
         <View style = {estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda} />
            <Text style={estilos.nomeFazenda}> Jenny Jack Farm</Text>
         </View>
         <Text style={estilos.descricao}> Produtos selecionados de qualidade</Text>
         <Text style={estilos.preco}>R$ 40,00</Text>
      </View>

   </>
}

const estilos = StyleSheet.create({
   topo: {
      width: "100%",
      height: 578 / 768 * width,
   },
   titulo: {
      position: "absolute",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: "white",
      fontWeight: "bold",
      padding: 16,
   },
   cesta: {
      paddingVertical: 8,
      paddingHorizontal: 16,
   },
   nome: {
      fontSize: 26,
      lineHeight: 42,
      color: "#464646",
      fontWeight: "bold",
   },
   fazenda: {
      flexDirection: "row",
      paddingVertical: 12,
      marginLeft: 12,
   },
   imagemFazenda: {
      width: 32,
      height: 32,
   },
   nomeFazenda: {
      fontSize: 16,
      lineHeight: 26,
   },
   descricao: {
      color: "#A3A3A3",
      fontSize: 16,
      lineHeight: 26,
   },
   preco: {
      color: "#2A9F85",
      fontWeight: "bold",
      fontSize: 26,
      lineHeight: 42,
      marginTop: 8,
   },
});