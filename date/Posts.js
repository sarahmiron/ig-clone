import { USERS } from "./Users"

export const POSTS = [
    {
        imageurl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Relax and chill. Happy mornings',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'lorehampu',
                comment: 'Wow!This is great',
            },
            {
                user: 'emanuelm',
                comment: 'nice',
            },
        ],
    },
    {
        imageurl: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        user: USERS[1].user,
        likes: 780,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'euuu',
                comment: 'Wow!This is great',
            },
            {
                user: 'notme',
                comment: 'nice',
            },
        ],
    },
    {
        imageurl: 'https://images.unsplash.com/photo-1565410028488-a7108a14db31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1019&q=80',
        user: USERS[2].user,
        likes: 870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'smthnice',
                comment: 'Wow!This is great',
            },
            {
                user: 'emanuelm',
                comment: 'nice',
            },
        ],
    },

]