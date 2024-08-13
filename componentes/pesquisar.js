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

  import usuarioFeminino from '../img/usuáriofeminino.png'
  import capacete from '../img/capacete.png' 
  import iconEncanamento from '../img/iconEncanamento.png' 
  import mercenaria from '../img/mercenaria.png'
  import eletricidade from '../img/eletricidade.png'  

   const imgbg1 ='../img/3.png'

export function Pesquisar(){
    return (
      <ImageBackground
      source={require(imgbg1)}
      style={styles.imagemFundo}
      >
        <SafeAreaView style={styles.container}>
             <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.container2}>
                    <View style={styles.colunaTitulo}>
                        <Text style={styles.tituloPrincipal}>O que você procura?</Text>
                    </View>

                    </View>

                    <View style={styles.container2}>
                        <View style={styles.colunaPesquisa}>
                                
                     
                         <TouchableOpacity>
                                 <View style={styles.colunaOpcao}>
                                    <Image style={styles.img} source={capacete} />
                                     <Text style={styles.textoOption}>Pequenos reparos</Text>
                                 </View>
                         </TouchableOpacity>

                         <TouchableOpacity>
                                 <View style={styles.colunaOpcao2}>
                                 <Image style={styles.img} source={mercenaria} />
                                     <Text style={styles.textoOption}>Mercenária</Text>
                                 </View>
                         </TouchableOpacity>

                         <TouchableOpacity>
                                 <View style={styles.colunaOpcao2}>
                                 <Image style={styles.img} source={eletricidade} />
                                     <Text style={styles.textoOption}>Elétrica</Text>
                                 </View>
                         </TouchableOpacity>

                            <TouchableOpacity>
                                 <View style={styles.colunaOpcao2}>
                                 <Image style={styles.img} source={iconEncanamento} />
                                     <Text style={styles.textoOption}>Encanamento</Text>
                                 </View>                         
                         </TouchableOpacity>

                         <TouchableOpacity>
                                 <View style={styles.colunaRosa}>
                                    <Image style={styles.img} source={usuarioFeminino} />
                                     <Text style={styles.textoEncontreMulheres}>Encontre profissionais mulheres perto de você!!</Text>
                                 </View>                         
                         </TouchableOpacity>
                     
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
        height:1000,
        width:350,
        alignItems:'center',
        borderRadius:16,
        backgroundColor:'white',
        marginTop:30,
    },
    colunaOpcao:{
        backgroundColor:'#e9e9e7',
        width: 300,
        height: 60,
        borderRadius: 15,
        alignItems:'center',
        marginTop:80,
        flexDirection:'row',
      },
    colunaOpcao2:{
        backgroundColor:'#e9e9e7',
        width: 300,
        height: 60,
        borderRadius: 15,
        
        alignItems:'center',
           
        marginTop:12,
        flexDirection:'row',
        
      },
      colunaRosa:{
        backgroundColor:'#eba3b5',
        width: 300,
        height: 120,
        borderRadius: 15,
        alignItems:'center',
        marginTop:20,
        flexDirection:'row',
      },
      textoOption:{
        color: '#3669a4',
        marginLeft: 9,
        fontSize: 20,
        fontWeight: '730',
       
      },
      textoEncontreMulheres:{
        color: 'white',
        marginLeft: 1,
        fontSize: 20,
        fontWeight: '730',
      },
      img:{
        height:60,
        width:60,
        justifyContent:'flex-start',
        marginLeft:10
      }

})