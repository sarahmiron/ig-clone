import { SafeAreaView, StyleSheet, map } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import { ScrollView } from "react-native";
import { POSTS } from "../date/Posts";
import Post from "../components/home/Post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}

            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})
export default HomeScreen;