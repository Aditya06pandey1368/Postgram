import { createContext, useContext, useRef } from "react";
import { PostListStore } from "./Store/Post-List-Store";

const CreatePost = () => {

  const {addPost} = useContext(PostListStore);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle= postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    
    userIdElement.current.value = '';
    postTitleElement.current.value = '';
    postBodyElement.current.value = '' ;
    tagsElement.current.value = '';
    
    addPost(userId, postTitle, postBody, tags);
  }

  return <form className="create-post" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">Your User Id</label>
      <input type="userId" ref={userIdElement} className="form-control" id="userId" placeholder="Enter you used Id"  />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="Enter Title"  />
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea type="text" ref={postBodyElement} rows="4" className="form-control" id="body" placeholder="Tell us more about it..."  />
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Hastags</label>
      <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter your tags using space"  />
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreatePost;