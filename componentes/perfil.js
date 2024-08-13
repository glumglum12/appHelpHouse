import React from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    View,
    ImageBackground,
  } from 'react-native'; // Adicione todas as dependências necessárias aqui


        import foto from  '../img/fotoPerfil.jpg'

   const imgbg1 ='../img/3.png'

export function Perfil(){
    return (
       
            <ImageBackground
              source={require(imgbg1)}
              style={styles.imagemFundo}
              >
               
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                     
                        <View style={styles.container}>

                            <View style={styles.container2}>
                                <View style={styles.colunaPesquisa}>
                                  
                                     

                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
            )
        }
        
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              paddingTop: StatusBar.currentHeight,
              justifyContent: "center",
              alignItems: "center",
            },
            container2: {
              flexDirection: 'row',
            },
            scrollView: {
              marginHorizontal: 20,
            },
            imagemFundo:{
              flex:1,
              resizeMode:'cover',
              width:"100%",
          },
            fotoPerfil:{
                width:110,
                height:110,
                borderRadius:85,
                alignItems:'center',
                marginLeft:5,
                marginTop:20,
            },
            
            nome:{
                fontSize:29,
                fontWeight:700,
                textAlign:'center',
                color:'#004aad',
                marginTop:3,
            },
            localizacao:{
                fontSize:20,
                fontWeight:600,
                textAlign:'center',
                color:'black',
            },

            colunaTitulo:{
                height:73,
                width:500,
                marginTop:80,
                flex:1,
            },
            tituloPrincipal:{
                color: 'white',
                textAlign:'center',
                fontSize: 34,
                fontWeight: '700',
                marginTop:20,
            },
            colunaPesquisa:{
                height:750,
                width:390,
                borderRadius:20,
                backgroundColor:'white',
                marginTop:110,
                flexDirection:'row',
                alignItems:'center',
            },
            colocaFoto:{
                height:137,
                width:145,
                flex:1,
            },
            colunaNome:{
                width:145,
                height:130,
            
                flexDirection:'column',
               
              
            },
            propaganda:{
                height: 50,
                width: 290,
                marginTop: 7,
                backgroundColor:'pink',
               
              },
        
              titulo: {
                color: '#004aad',
                fontSize: 17,
                fontWeight: '650',
               justifyContent:'flex-start',
              },
            
            })