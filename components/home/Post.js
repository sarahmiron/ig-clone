import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

const postFooterIcons = [
    {
        name: 'Like',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Ggokpfj2IfotWwauqaqL-U9feVMFAoMXfdaPtbekEchQUmUD&s'
    },
    {
        name: 'Comment',
        imageurl: 'https://icon-library.com/images/facebook-comment-icon-png/facebook-comment-icon-png-27.jpg'
    },
    {
        name: 'Share',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdgaPUcFkdQw8GSUK7CqSHyEqN8q75PEBXnUpWgp5bIYeIGQ&s'
    },
    {
        name: 'Save',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaabfun345dr35TAxDG10DLxx48TVy1leza7yBJ2S-7vDbN_5&s'
    },
]
const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>

        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
        <View style={{
            flexDirection: 'row', alignItems: 'center'
        }}>
            <Image source={{ uri: post.profile_picture }
            } style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image
            source={{ uri: post.imageurl }}
            style={{ height: '100%', resizeMode: 'cover' }}
        />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon}
                imgUrl={postFooterIcons[0].imageurl} />
            <Icon imgStyle={styles.footerIcon}
                imgUrl={postFooterIcons[1].imageurl} />
            <Icon imgStyle={[styles.footerIcon, styles.shareIcon]}
                imgUrl={postFooterIcons[2].imageurl} />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon imgStyle={styles.footerIcon}
                imgUrl={postFooterIcons[3].imageurl} />
        </View>
    </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)
//post.comments.length => 0 or 1 or 2 or 3
//0 => false
//1 => true
//!! double negation just turn everything you have on false

const CommentSection = ({ post }) => (

    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                View
                {post.comments.length > 1 ? '  all ' : ' '}
                {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>

)
//0 comments case render component
//1 comment render component without "all" and singular comment
//2 comment render coment with "all" and plural comments 

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>
                        {comment.user}
                    </Text>
                    {''} {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },

    footerIcon: {
        width: 33,
        height: 33,
    },

    shareIcon: {
        transform: [{ rotate: '320deg' }],
        marginTop: -3,
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    }
})
export default Post