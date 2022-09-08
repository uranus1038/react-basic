import './App.css';
import React , { useState } from 'react';

//Component 
import Navbar from './Components/Navbar.js'
import Input from './Components/Input';
import Post from './Components/Posts.js'

let id = 1 ;
function App() {
  const [posts,setPosts] = useState([]) 
  function addPost(title)
  {
    const newPost = {id , title} 
    setPosts([newPost,...posts])
    id+=1 ;
  }
  return (
    <div className="App">
      <Navbar/>
      <Input addPost={addPost}/>
      {posts.map((post)=> <Post title={post.title} key={post.id}/>)}
    </div>
  );
}

export default App;
