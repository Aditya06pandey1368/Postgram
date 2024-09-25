import { createContext, useReducer } from "react";

export const PostListStore = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList ;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    }
    else if(action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DefaultPostList);

    const addPost = (userId, postTitle, postBody, tags) => {
        dispatchPostList({
            type : "ADD_POST",
            payload : {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                userId: userId,
                tags: tags,
            },
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type : "DELETE_POST",
            payload : {
                postId,
            },
        });
    };

    return (
        <PostListStore.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostListStore.Provider>
    );
}

const DefaultPostList = [
    {
        id: "1",
        title: "Level Up Your Coding Skills! 💻🚀",
        body: "Just completed today's LeetCode challenge! Tackled a tough problem and learned something new about dynamic programming. 🧠 It’s all about consistency and keeping that problem-solving mindset sharp. Who's up for the next challenge? Let’s keep pushing boundaries! 💪",
        userId: "ramesh",
        tags: ["#LeetCode", "#CodingChallenge", "#ProblemSolving", "#KeepLearning" ,"#DailyCoding"]
    },
    {
        id: "2",
        title: "Tips for LeetCode Beginners 📝🔍",
        body: "Starting out with LeetCode? Don’t get overwhelmed! Begin with easy problems, understand the basics, and gradually move to tougher challenges. Remember, every expert was once a beginner. Consistency is key. You got this! 🚀",
        userId: "Aditya",
        tags: ["#LeetCode", "#CodingTips", "#BeginnersGuide", "#Programming","#CodeNewbie"]
    },
];

export default PostListProvider;