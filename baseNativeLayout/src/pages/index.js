import React from 'react';
import { Box, HStack, Icon, Pressable, Avatar, FlatList } from 'native-base'

import {  Storys } from '../components/Storys'
import {  Feed } from '../components/Feeds'


import { Feather } from '@expo/vector-icons'

const data = [
    {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Noragami",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://avatarfiles.alphacoders.com/967/96757.png"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Killua",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://avatarfiles.alphacoders.com/174/174875.png"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://avatarfiles.alphacoders.com/849/84930.png"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d724",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://avatarfiles.alphacoders.com/715/71560.jpg"
  }, 
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d723",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://avatarfiles.alphacoders.com/335/335596.jpg"
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d722",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://avatarfiles.alphacoders.com/335/335650.jpg"
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d721",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://avatarfiles.alphacoders.com/335/335608.png"
  }
  ];
  

export function Home() {
    return (
        <Box flex={1} bg="#f8f8f8" flexDirection='column' >
           
           <HStack padding={4} w="100%" alignItems='center' justifyContent='space-between' safeArea>
            <Box>
              <Pressable>
                    <Icon 
                     as={Feather}
                     name="menu"
                     size={7}
                     color="#000"
                    />
                </Pressable>  
            </Box>

            <Box flexDirection='row' rounded='md' alignItems='center'>
                <Pressable>
                    <Icon 
                     as={Feather}
                     name="bell"
                     size={7}
                     color="#000"
                     mr={4}
                    />
                </Pressable>

                <Pressable>
                    <Avatar
                     source={{ uri: "https://avatarfiles.alphacoders.com/276/276208.jpg"}}
                     w={12}
                     h={12}
                    />
                </Pressable>
            </Box>

           </HStack>

           <Box paddingX={4}>
                <FlatList 
                 horizontal
                 data={data}
                 showsHorizontalScrollIndicator={false}
                 renderItem={({ item }) => (
                    <Storys data={item} />
                 )}
                />
           </Box>

           <Box paddingX={4}>
                <FlatList 
                 data={data}
                 showsHorizontalScrollIndicator={false}
                 renderItem={({ item }) => (
                    <Feed data={item} />
                 )}
                />
           </Box>


        </Box>
    );
}