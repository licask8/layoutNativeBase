import React  from 'react'
import { Box, Heading, Image, Text, Icon } from 'native-base'

import { Feather} from '@expo/vector-icons'

export function Feed({ data }) {
    return (
        <Box
         flex={1} 
         flexDirection="column" 
         backgroundColor='#fff'
         padding={2} 
         marginBottom={4} 
         borderRadius={4}
        >
            <Box>
                <Image 
                 source={{ uri: data.avatarUrl}}
                 alt="Post feed"
                 w='100%'
                 h={120}
                />

                <Box marginY={3}>
                    <Heading size="sm" pb={1}>Anime Blog</Heading>
                    <Text numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </Box>

                <Box
                 marginY={1}
                 flexDirection="row"
                 bg="rgba(226, 232, 240, 0.4)"
                 alignSelf='flex-start'
                 borderRadius="6"
                 paddingX={3}
                 paddingY={1}
                >

                    <Icon 
                     as={Feather}
                     name="user"
                     size={5}
                     color="#000"
                     mr={2}
                    />
                    <Text numberOfLines={1}>
                        {data.fullName}
                    </Text>

                </Box>

            </Box>
        </Box>
    )
}