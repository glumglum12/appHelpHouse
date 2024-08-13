import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../componentes/home.js';
import { Pesquisar } from '../componentes/pesquisar.js';
import { Chat } from '../componentes/chat.js';
import { Perfil } from '../componentes/perfil.js';



import {Feather} from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <NavigationContainer>
                 <Navigator screenOptions={{headerShown: false}}>
    
                 <Screen name="Home" component={Home}
                     options={{ tabBarIcon: () => {
                        return <Feather name='home' size={25} color="#3669a4"/>
                        }
                    }}
                    />
                    <Screen name="Pesquisar" component={Pesquisar}
                     options={{ tabBarIcon: () => {
                        return <Feather name='search' size={30} color="#3669a4"/>
                        }
                    }}
                    />
                    <Screen name="Chat" component={Chat}
                     options={{ tabBarIcon: () => {
                        return <Feather name='message-circle' size={30} color="#3669a4"/>
                        }
                    }}
                    />
                    <Screen name="Perfil" component={Perfil}
                     options={{ tabBarIcon: () => {
                        return <Feather name='user' size={30} color="#3669a4"/>
                        }
                    }}
                    />
                </Navigator>
        </NavigationContainer>
    )
}