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
    TextInput,
    FlatList,
  } from 'react-native'; // Adicione todas as dependências necessárias aqui
  import { useState, useEffect } from 'react';

  import ListItem from '../flat/listItem'
  import results from '../results'

   import filtro from '../img/classifi.png'
  // import capacete from '../img/capacete.png' 
  // import iconEncanamento from '../img/iconEncanamento.png' 
  // import mercenaria from '../img/mercenaria.png'
  // import eletricidade from '../img/eletricidade.png'  
 
   const imgbg1 ='../img/3.png'

   
   export function Pesquisar(){
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(results);

    useEffect(()=>{
      if(searchText === ''){
        setList(results);
      }else {
        setList(
          results.filter(item=>{
            if(item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
              return true;
            }else {
              return false;
            }
          })
        )
      }
    }, [searchText]);

    const handleOrderClick = () => {
      let newList = [...results];

    newList.sort((a, b)=>{
      if(a.name > b.name){
      return 1;
      } else {
      if(b.name > a.name){
        return -1;
      } else {
        return 0;
      }
      }
    })
    
      setList(newList);  
    };
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
                          <View style={styles.area}>
                            <TextInput 
                            style={styles.input}
                            placeholder='pesquise aqui'
                            value={searchText}
                            onChangeText={(t) => setSearchText(t)}
                            />
                            <TouchableOpacity onPress={handleOrderClick} >
                             <Image style={styles.filtroImg} source={filtro} />
                            </TouchableOpacity>
                            </View>
                     
                         <FlatList
                         data={list}
                         style={styles.list}
                         renderItem={({ item }) => <ListItem data={item}/>} 
                         keyExtractor={(item) => item.id}
                         />
                        </View>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )
    
};




const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
   
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
 input:{
  margin:30,
  height:50,
  width:250,
  borderRadius:20,
  paddingLeft:2,
  paddingRight:1,
  borderWidth:5,
  borderColor:'#3669a4',
  fontWeight:500,
  color:'gray',
  fontSize:19,
  flex:1,
 },
 area:{
  flexDirection:'row',
  alignItems:'center',
 },
    colunaTitulo:{
        height:73,
        width:500,
        marginTop:80,
        flex:1,
    },
    filtroImg:{
      width:36,
      height:35,
      marginRight:7,
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

});
export default Pesquisar;