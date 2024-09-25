import { useContext } from "react";
import Post from "./post"
import { PostListStore } from "./Store/Post-List-Store";

const PostList = () =>{
    const {postList} = useContext(PostListStore);
    return (
    <>
    {postList.map((post)=>(<Post key={post.id} post={post}/>))}
    </>
    );
};

export default PostList;