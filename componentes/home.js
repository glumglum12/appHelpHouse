import React, { Children } from 'react'
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

 
//   import { LinearGradient } from 'expo-linear-gradient';

  import lupaGrande from '../img/lupaGrande.png'
  import encanador from '../img/encanador.png'
  import capacete from '../img/capacete.png' 
  import eletrica from '../img/electrical.png'
  import chuveiro from '../img/chuveiro.jpg'
  import manutencao from '../img/manutencao.jpg'
  import kitEletrico from '../img/kit-electrico.png'


  const imgbg1 ='../img/3.png'

export function Home(){
    return (
        <ImageBackground
        source={require(imgbg1)}
        style={styles.imagemFundo}
        >
            <SafeAreaView style={styles.container}>
           
             <ScrollView style={styles.scrollView}>
                
                 <View style={styles.container}>
        
                     <View style={styles.container2}>
       
                             <View style={styles.posicao}>
                             <TouchableOpacity>
                                 <View style={styles.coluna1}>
                                     <Text style={styles.texto1}>Qual serviço você procura?</Text>
                                     <Image style={styles.lupaGrande} source={lupaGrande} />
                                 </View>
                                 </TouchableOpacity>
                             </View>
                        
                     </View>
 
                     <View style={styles.container2}>
                         <View style={styles.propaganda}>
                             <Text style={styles.titulo}>Serviços</Text>
                             <Text style={styles.subtitulo}>Encontre aqui algumas áreas mais procuradas.</Text>
                         </View>
                     </View>
 
                     <View style={styles.container2}>
                         <TouchableOpacity>
                                 <View style={styles.colunaOpcao}>
                                     <Image style={styles.encanadorImg} source={encanador} />
                                     <Text style={styles.textoOpcao}>Encanamento</Text>
                                 </View>
                         </TouchableOpacity>
                     </View>
                     <View style={styles.container2}>
                         <TouchableOpacity>
                                 <View style={styles.colunaOpcao2}>
                                     <Image style={styles.encanadorImg} source={eletrica} />
                                     <Text style={styles.textoOpcao}>Elétrica</Text>
                                 </View>
                         </TouchableOpacity>
                     </View>
 
                     <View style={styles.container2}>
                         <TouchableOpacity>
                                 <View style={styles.colunaOpcao2}>
                                     <Image style={styles.encanadorImg} source={capacete} />
                                     <Text style={styles.textoOption}>Construção e reparos</Text>
                                 </View>
                         </TouchableOpacity>
                     </View>

                     <View style={styles.container2}>
                        <View style={styles.colunaServico}>
                            <Text style={styles.texto2}>Alguns dos serviços mais procurados ultimamente</Text>
                        
                        <View style={styles.servicosProcurado}>
                        <TouchableOpacity>
                            <Image style={styles.chuveiroImg} source={chuveiro} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={styles.chuveiroImg} source={kitEletrico} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                             <Image style={styles.chuveiroImg} source={manutencao} />
                        </TouchableOpacity>

                        </View>
                        </View>
                     </View>
                     
                 </View>
                
             </ScrollView>
             
         </SafeAreaView>
         </ImageBackground>
    );
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
    buttomEncanamento:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:8,
    },
  
    coluna1:{
        backgroundColor:'white',
        width: 340,
        height: 120,
        borderRadius: 15,
        alignItems:'center',
        justifyContent:'center', 
        textAlign:'center',   
        marginTop:80,
        flexDirection:'row',
        
    },
    texto1:{
        color:'#3669a4',
        fontSize:29,
        fontWeight:700,
        marginLeft:20,
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
       
    },
    lupaGrande:{
        height:65,
        width:73,
        marginRight:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    propaganda: {
        height: 150,
        width: 300,
        marginTop: 19,
       
        flex:1,
      },

      titulo: {
        color: '#3669a4',
        
        fontSize: 33,
        fontWeight: '700',
        marginTop:20,
      },
      subtitulo: {
        color: 'white',
        fontSize: 24,
        fontWeight: '730',

      },
      colunaOpcao:{
        backgroundColor:'white',
        width: 340,
        height: 70,
        borderRadius: 15,
        alignItems:'center',
        marginTop:3,
        flexDirection:'row',
      },
      colunaOpcao2:{
        backgroundColor:'white',
        width: 340,
        height: 70,
        borderRadius: 15,
        
        alignItems:'center',
        
        marginTop:8,
        marginBottom:5,
        flexDirection:'row',
        flex:1,
      },
  
      encanadorImg:{
        height:60,
        width:70,
        justifyContent:'flex-start',
        marginLeft:10
      },
      textoOption:{
        color: '#3669a4',
        marginLeft: 9,
        fontSize: 25,
        fontWeight: '630',
       
      },
        textoOpcao:{
            color: '#3669a4',
           justifyContent:'flex-start',
            fontSize: 25,
            marginLeft:10,
            fontWeight: '630',
        },
        colunaServico:{
            backgroundColor:'#004aad',
            width: 340,
            height: 200,
            borderRadius: 15,
            alignItems:'center',
            justifyContent:'center', 
            textAlign:'center',
            marginTop:22,
           
            flexDirection:'column',
            flex:1,
        },
        texto2:{
            color: 'white',
            marginBottom:14,
            fontSize: 20,
            fontWeight: '690',
            justifyContent:'center',
            textAlign:'center',
        },
        servicosProcurado:{
            flexDirection:'row',
        },
        chuveiroImg: {
            width: 80,
            height: 80,
            borderRadius: 13,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            justifyContent: 'space-between',
           
          },
})



















// const Background = ({ Children }) => {
//     return(
//         <LinearGradient
//         colors={['#f6d17c', '#ff8438']}
//         style={{
//             flex: 1,
//             paddingTop:30,
//         }}>
//         {Children}

//         </LinearGradient>
    
//     );
// };