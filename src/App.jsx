import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import PostListProvider from './Components/Store/Post-List-Store'

function App() {

  const [Display, setDisplay] = useState(" ");

  return (
    <PostListProvider>
    <div className="big-container">
      <Sidebar Display={Display} setDisplay={setDisplay}></Sidebar>
      <div className="small-container">
        <Header></Header>
        {Display === 'Home'?<PostList></PostList> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
