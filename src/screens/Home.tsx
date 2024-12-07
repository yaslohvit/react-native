import {TouchableOpacity} from 'react-native'
import {Container, FlatList, Heading, Pressable, Text, VStack} from "native-base";
import {useState} from "react";


type Post = {
    id: number;
    userId: string;
    content: string;
    likes: number;
    createdAt: string
}

export function Home() {

    const [post, setPosts] = useState<Post[]>([
        {
            id: 1,
            userId: "1",
            content: "Primeiro Post Na Plataforma",
            likes: 0,
            createdAt: "2024-12-07"
        }
    ]);


    return (
        <VStack>
            <FlatList
                data={post}
                renderItem={({item}) => (

                    <TouchableOpacity>
                        <HStack
                            bg={"gray.500"}
                            alignItems={"center"}
                            p={2}
                            pr={4}
                            mb={3}
                            rounded={"md"}>

                            <VStack flex={1}>
                                <Heading fontSize={"lg"} color={"white"} fontFamily={"heading"}>
                                    {item.data}
                                </Heading>
                                <Text fontSize={"sm"} color={"gray.200"} mt={1} numberOfLines={1}>
                                </Text>
                            </VStack>
                        </HStack>
                    </TouchableOpacity>
                )}
            />
        </VStack>
    )


}