import { useContext } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { PostListStore } from "./Store/Post-List-Store";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostListStore);

  return <div className="card post-card" style={{ width: "38rem" }}>
    <div className="card-body">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
        <RiDeleteBinFill />
      </span>
      <h5 className="card-title">
        {post.title}
      </h5>
      <p className="card-text">
        {post.body}
      </p>
      {post.tags.map((tag) => <span key={tag} className="badge text-bg-primary post-tags">{tag}</span>)}
    </div>
  </div>
}

export default Post;